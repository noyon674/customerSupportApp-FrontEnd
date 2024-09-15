import React from "react";
import "./account_form.scss";

function Account_form() {
  return (
    <div className="account-form-section">
      <h3>Account Details</h3>
      <form action="">
        <div className="input">
          <label htmlFor="">Full Name</label> <br />
          <input
            type="text"
            name="full-name"
            placeholder="Jane Smith"
            required
          />
        </div>

        <div className="input">
          <label htmlFor="">Username</label> <br />
          <input
            className="username"
            type="text"
            name="username"
            placeholder="janesmith123"
          />
        </div>

        <div className="input">
          <label htmlFor="">Email</label> <br />
          <input
            className="email"
            type="email"
            name="email"
            placeholder="janesmith@example.com"
          />
        </div>

        <div className="input">
          <label htmlFor="">Password</label> <br />
          <input type="password" name="pass" placeholder="********" required />
        </div>

        <div className="input">
          <label htmlFor="">Phone Number</label> <br />
          <input type="text" name="number" placeholder="+123456789" required />
        </div>

        <div className="input">
          <button type="submit">Save</button>
        </div>

        <div className="notification">
          <h6>Notification Settings</h6>
          <div className="check-box">
            <input type="checkbox" name="" id="" />
            <p>Email Notifications</p>
          </div>

          <div className="check-box">
            <input type="checkbox" name="" id="" />
            <p>SMS Notifications</p>
          </div>

          <div className="check-box">
            <input type="checkbox" name="" id="" />
            <p>Push Notifications</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Account_form;
