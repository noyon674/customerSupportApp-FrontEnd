import React, { useState } from "react";
import "./loginform.scss";
import InputField from "../../common/InputField";
import { useForm } from "../../common/useForm";
import { loginSuccess } from "../../../redux/actions/auth";
import { connect } from "react-redux";
import { logInUser } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

function LogInForm({ loginSuccess }) {

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const { values, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await logInUser(values);
      if (data) {
        setErrorMsg(null);
        loginSuccess({
          accessToken: data["access"],
          refreshToken: data["refresh"],
          user_id: data["user_id"],
        });
      }
      resetForm();
      //navigate('/');
    } catch (error) {
      console.log(error)
      setErrorMsg(error.response.data.detail);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <p>Add your details to login</p>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
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
        {errorMsg && <p className="error-msg-design">{errorMsg} !</p>}
        <button type="submit">Login</button>
      </form>
      <div className="text">
        <p>Forgot your password ?</p>
        <p>or</p>
        <h6>Login With</h6>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  loginSuccess, // Map action creator to props
};

export default connect(null, mapDispatchToProps)(LogInForm); // Connect component to Redux
