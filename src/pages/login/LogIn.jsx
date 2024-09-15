import React from "react";

import './login.scss';
import Header from "../../components/common/header/Header";
import LogInText from "../../components/login-comp/login-text/LogInText";
import LogInForm from "../../components/login-comp/login-form/LogInForm";
import LogInBottom from "../../components/login-comp/login-bottom/LogInBottom";

function LogIn() {
  return (
    <div className="loginpage">
      <LogInForm />
      <LogInBottom />
    </div>
    
  );
}

export default LogIn;
