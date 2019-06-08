import React, { Component } from 'react';
import { Button, Form, Row, Col, FormGroup, Label, Input, Badge } from 'reactstrap';




class Payment extends Component {
    state = {
        cardNumberValue: '',
        nameValue: '',
        emailAddressValue: '',
        formValid: false
    }
    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(name, value) {
        let deleteAccountValue = this.state.deleteAccount;

        let formValid = deleteAccountValue.match(/^(DELETE)$/);

        this.setState({
            formValid: formValid
        }, this.validateForm);

    }
    render() {
        return (
            <Row className="Account-widget Account-payment" >
                <Col sm="12" md="3">
                    <h4>Payment</h4>
                </Col>
                <Col sm="12" md="9">
                    <Form>
                        <FormGroup>
                            <Label for="cardNumber">Card Number</Label>
                            <Input type="text" name="cardNumber" id="cardNumber" placeholder="Insert Credit Card Number" />
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Label> Expiration date</Label>
                                <Input type="text" id="experationdate" />
                            </Col>
                            <Col>
                                <Label> CVC Number</Label>
                                <Input type="text" id="cvcnumber" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <h4>
                                <Badge outline>
                                    powerd by <span id="stripe_badge">stripe</span>
                                </Badge>
                            </h4>
                            <br />
                        </FormGroup>

                        <Button>Save Payment Information</Button>

                    </Form>
                </Col>
            </Row>
        );
    }

}

export default Payment;