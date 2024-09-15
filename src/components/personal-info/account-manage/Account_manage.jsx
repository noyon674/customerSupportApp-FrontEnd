import React from "react";
import "./account_manage.scss";

function Account_manage() {
  return (
    <div className="accont-manage-section">
      <h3>Account Management</h3>
      <button>Change Password</button>
      <button>Deactivate Account</button>
      <button>Delete Account</button>
    </div>
  );
}

export default Account_manage;
