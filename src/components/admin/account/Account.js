import React from "react";

import "./Account.css";

import DeleteAccount from "./DeleteAccount";
import Payment from "./Payment";
import Profile from "./Profile";
import AdminLayout from "../layouts/adminLayout/adminLayout";

function Account(props) {
  return (
    <div id="account-div">
      <AdminLayout>
        <Profile />
        <Payment />
        <DeleteAccount />
      </AdminLayout>
    </div>
  );
}

export default Account;
