import React, { Component } from 'react';
import { Button, Form, Row, Col, FormGroup, Label, Input, Badge } from 'reactstrap';
import { CardElement, injectStripe } from 'react-stripe-elements';


class PaymentForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }


    async submit(ev) {
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });
        if (response.ok) console.log("Purchase Complete!")
        if (response.ok) this.setState({ complete: true });
    }



    render() {
        return (
            <Row className="Account-widget Account-payment" >
                <Col sm="12" md="3">
                    <h4>Payment</h4>
                </Col>
                <Col sm="12" md="9">
                    <CardElement />
                    <br />
                    <p> Amount </p>
                    <Input>  </Input>
                    <br />
                    <Button className="btn btn-primary" onClick={this.submit}> don't spend it all in one place </Button>
                </Col>
            </Row>
        );
    }

}



export default injectStripe(PaymentForm);