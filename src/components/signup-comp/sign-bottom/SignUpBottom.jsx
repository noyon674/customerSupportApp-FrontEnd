import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./signupbottom.scss";

function SignUpBottom() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("User login using google", user);

  return (
    <div className="signup-form">
      <div className="bar-section">
        <div className="div">
          <hr />
        </div>
        <div className="div">
          <p>or sign up with</p>
        </div>
        <div className="div">
          <hr />
        </div>
      </div>
      <div className="buttons">
        <button onClick={(e) => loginWithRedirect()}>Google</button>
        <button>Facebook</button>
      </div>
      <p className="reset-text">Trouble loggin in? Reset your password here.</p>
      <div className="login-button">
        <button>login</button>
      </div>
    </div>
  );
}

export default SignUpBottom;
