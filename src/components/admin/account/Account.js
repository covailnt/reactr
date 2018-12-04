import React from "react";

import "./Account.css";

import DeleteAccount from "./DeleteAccount";
import Payment from "./Payment";
import Profile from "./Profile";
import Admin from "../layouts/adminLayout/adminLayout";

function Account(props) {
  return (
    <Admin>
      <Profile />
      <Payment />
      <DeleteAccount />
    </Admin>
  );
}

export default Account;
