import React from "react";
import AccountForm from "../../components/personal-info/acount-form/Account_form";
import Header from "../../components/common/header/Header";
import BottomNavBar from "../../components/common/bottom_navbar/BottomNavBar";
import AccountManage from "../../components/personal-info/account-manage/Account_manage";

function Profile() {
  return (
    <>
      <Header />
      <AccountForm />
      <AccountManage />
      <BottomNavBar />
    </>
  );
}

export default Profile;
