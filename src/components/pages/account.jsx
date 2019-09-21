import React, { Component } from 'react';
import { connect } from "react-redux";
import { Elements, StripeProvider } from 'react-stripe-elements';

import { Redirect } from "react-router-dom";
import * as ROUTES from "../../routes/constants"
import Front from '../layout/front/front';
import ProfileForm from "../forms/profileForm/profileForm";
import PaymentForm from "../forms/paymentForm/paymentForm";
import SignOutForm from "../forms/signOutForm/signOutForm";
import ResetPasswordForm from "../forms/resetPasswordForm/resetPasswordForm";





class Account extends Component {
    render() {
        return (
            <Front>
                {/** <ProfileForm /> */}

                <StripeProvider apiKey="pk_live_7JPrVhkEW5coziQGA535LyFQ">
                    <Elements>
                        <PaymentForm />
                    </Elements>

                </StripeProvider>
                <SignOutForm />
                {/*<ResetPasswordForm /> */}
            </Front>
        );
    }
}

export default(Account);