import React, { useState } from "react";

import "./signupform.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../common/useForm";
import InputField from "../../common/InputField";
import { loginSuccess } from "../../../redux/actions/auth";
import { registerUser } from "../../../utils/api";

const SignUpForm = ({ loginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
    mobile: "",
    first_name: "",
    last_name: "",
    address: "",
    password: "",
    confirmPass: "",
  });

  const { username, email, first_name, last_name, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await registerUser({
        username,
        password,
        email,
        first_name,
        last_name,
      });
      if (data) {
        loginSuccess({
          accessToken: data["access"],
          refreshToken: data["refresh"],
          user_id: data["user_id"],
        });
        resetForm();
      }
    } catch (error) {
      setErrorMsg(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <p>Add your details to sign up</p>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <p className="error-msg-design">{errorMsg.username}</p>
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
        <p className="error-msg-design">{errorMsg.email}</p>
        <InputField
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <InputField
          type="text"
          name="last_name"
          value={last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <InputField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <div className="div">
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </div>
      </form>
      <div className="button-text">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginSuccess, // Map action creator to props
};

export default connect(null, mapDispatchToProps)(SignUpForm); // Connect component to Redux
