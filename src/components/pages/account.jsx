import React, { Component } from 'react';
import Front from '../layout/front/front';
import ProfileForm from "../forms/profileForm/profileForm";
import PaymentForm from "../forms/paymentForm/paymentForm";
import ResetPasswordForm from "../forms/resetPasswordForm/resetPasswordForm";
import { Elements, StripeProvider } from 'react-stripe-elements';

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

                {/*<ResetPasswordForm /> */}
            </Front>
        );
    }
}

export default Account;