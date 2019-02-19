import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input, Alert } from 'reactstrap';
import isValidEmail from '../../../utils/validity';

class Profile extends Component {
    constructor() {
        super();
        this.timeout = 0;
    }
    state = {
        emailValid: false,
        emailValue: null,
        buttons: {
            appNotifications: true,
            emailNotifications: false
        },
        formValid: false
    }
    handleUserInput = (e) => {
        const { name, value } = e.target;

        this.validateField(name, value);

    }
    validateField(name, value) {

        let formValid = false;
        switch (name) {
            case 'profilePhoto': {
                break;
            }
            case 'profileName': {
                break;
            }
            case 'profileEmailAddress': {
                let validEmail;
                validEmail = isValidEmail(value);
                console.log(value);
                console.log(validEmail);
                this.setState({
                    emailValue: value,
                    emailValid: validEmail
                }, this.validateForm);
                // if (this.timeout) {
                //     clearTimeout(this.timeout);
                // }
                // this.timeout = setTimeout(() => {

                // }, 500);


                // this.setState({
                //     emailValid: validEmail
                // }, this.validateForm);



                break;
            }
            default: {
                return;
            }

        }

        this.setState({
            formValid: formValid
        }, this.validateForm);

    }
    validateForm() {

    }
    toggleButton(e) {
        const name = e.target.name;
        const value = !this.state.buttons[name];

        let values = { ...this.state.buttons, [name]: value };
        this.setState({
            buttons: values
        });
        console.log(values);
    }

    render() {
        let emailErrorMessage;
        if ((this.state.emailValue && !this.state.emailValid) || this.state.emailValue == "") {
            emailErrorMessage = <Alert color="danger">
                Email address is invalid.
            </Alert>
        } else {
            emailErrorMessage = "";
        }
        return (
            <Row className="Account-widget Account-profile">
                <Col sm="12" md="3">
                    <h4>Profile</h4>
                </Col>
                <Col sm="12" md="9">
                    <Form>
                        <FormGroup>
                            <Label for="profilePhoto">Upload Profile Photo</Label>
                            <Input
                                onChange={(event) => this.handleUserInput(event)}
                                type="file"
                                name="profilePhoto"
                                id="profilePhoto"
                                placeholder="Choose file" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileName">Name</Label>
                            <Input
                                onChange={(event) => this.handleUserInput(event)}
                                type="text"
                                name="profileName"
                                id="profileName"
                                placeholder="Enter Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileEmailAddress">Email address</Label>
                            {emailErrorMessage}
                            <Input
                                onChange={(event) => this.handleUserInput(event)}
                                type="text"
                                name="profileEmailAddress"
                                id="profileEmailAddress"
                                placeholder="email@address.com" />
                        </FormGroup>
                        <FormGroup>
                            <Link to="/admin/reset-password">Reset Password</Link>
                        </FormGroup>

                        <Label>
                            <h5>Notifications</h5>
                        </Label>
                        <br />

                        <Label> App Notifications</Label>

                        <Button onClick={(event) => this.toggleButton(event)} name="appNotifications" size="small" className="float-right" color={this.state.buttons.appNotifications ? 'primary' : 'secondary'}>
                            {this.state.buttons.appNotifications ? 'On' : 'Off'}
                        </Button>
                        <br />
                        <br />
                        <Label> Email Notifications</Label>
                        <Button onClick={(event) => this.toggleButton(event)} name="emailNotifications" size="small" className="float-right" color={this.state.buttons.emailNotifications ? 'primary' : 'secondary'}>
                            {this.state.buttons.emailNotifications ? 'On' : 'Off'}
                        </Button>

                        <br />
                        <br />

                        <Button>Save Profile</Button>
                    </Form>
                </Col>
            </Row>
        );
    }

}

export default Profile;