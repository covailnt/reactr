import React from "react";
import Front from "../layout/front/front"
import CreateAccountForm from '../forms/createAccountForm/createAccountForm';

function CreateAccount(props) {
  return (
    <Front>
      <CreateAccountForm></CreateAccountForm>
    </Front>
  )
}

export default CreateAccount;