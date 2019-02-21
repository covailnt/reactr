import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input, Alert } from 'reactstrap';
import Access from './layouts/Access';
import './LogIn.css';
import isValidEmail from '../../utils/validity';

class LogIn extends Component {

    constructor() {
        super();
    }

    state = {
        emailValid: false,
        emailValue: null,
        formValid: false,
        rememberMe: false,
        logInBtn: false,
        passwordValue: null
    }

    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.validateField(name, value);
    }
    validateField = (name, value) => {
        switch (name) {
            case 'email':
                let validEmail = isValidEmail(value);
                this.setState({ emailValid: validEmail, emailValue: value });
                break;
        }
    }

    render() {
        let emailErrorMsg;
        if (this.state.emailValue != null && !this.state.emailValid) {
            emailErrorMsg = <Alert color="danger">
                Email address is invalid.
            </Alert>;
        }
        return (

            <Access>
                <div className="Login">
                    <div className="Login-header">
                        <Row>
                            <Col md="6">
                                <h4>
                                    Log In
                                </h4>
                            </Col>
                            <Col md="6">
                                <Link className="float-right" to="/create-account">Create Account</Link>
                            </Col>
                            <Col md="12">

                            </Col>
                        </Row>

                    </div>
                    <div className="Login-form">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input onBlur={this.handleUserInput} type="email" name="email" id="exampleEmail" placeholder="e@mail.com" />
                                <small>We'll never share your email with anyone else.</small>
                                {emailErrorMsg}
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                            </FormGroup>
                            <Row>
                                <Col md="6">
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />
                                            Remember Me
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <Link className="float-right" to="/forgot-password">Forgot Password</Link>
                                </Col>
                            </Row>
                            <br></br>
                            <Button color="primary">Log In</Button>
                        </Form>
                    </div>
                    <br></br>
                    <div className="Social-form">
                        <Button id="facebook" color="primary" block>Log In with Facebook</Button>
                        <Button id="google" color="secondary" block>Log In with Google</Button>
                        <Button id="twitter" color="success" block>Log In with Twitter</Button>
                    </div>
                </div>
            </Access>

        );
    }


}

export default LogIn;