import React from "react";
import Front from '../layout/front/front';
import CreateAccountForm from '../components/createAccountForm/createAccountForm';

function CreateAccount(props) {
  return (
    <Front>
      <CreateAccountForm></CreateAccountForm>
    </Front>
  )
}

export default CreateAccount;