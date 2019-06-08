import React, { Component } from 'react';
import Front from '../layout/front/front';
import ProfileForm from "../forms/profileForm/profileForm";
import PaymentForm from "../forms/paymentForm/paymentForm";
import ResetPasswordForm from "../forms/resetPasswordForm/resetPasswordForm";

class Account extends Component {
    render() {
        return (
            <Front>
                <ProfileForm />
                <PaymentForm />
                <ResetPasswordForm />
            </Front>
        );
    }
}

export default Account;