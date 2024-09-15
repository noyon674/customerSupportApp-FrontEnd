import React from "react";
import "./loginbottom.scss";

import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LogInBottom() {
  return (
    <div className="login-bottom">
      <button className="facebook"> <FaFacebookF /> Login with Facebook</button>
      <button className="google"><FaGoogle /> Login with Google</button>

      <p>Don't have an account? <Link>Sign up</Link></p>
    </div>
  );
}

export default LogInBottom;
