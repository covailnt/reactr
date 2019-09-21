import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col, FormGroup, Label, Input, Alert } from "reactstrap";

import { connect } from "react-redux";
import * as ROUTES from "../../../routes/constants";


const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    };
};


const mapDispatchToProps = dispatch => {
    return {
        signInEmail:    (email, password) => dispatch({type:"SIGN_IN_EMAIL_SAGA",   payload: { email, password}}), 
        signInFacebook: () => dispatch({type:"FACEBOOK_SAGA" ,       payload: {}}),
        signInGoogle:   () => dispatch({type:"GOOGLE_SAGA",          payload: {}}),
        signInTwitter:  () => dispatch({type:"TWITTER_SAGA",         payload: {}}),
    };
};


class SignInForm extends Component {


    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {};
    }

    onClick = e => {
        e.preventDefault();
        console.log(e.target.name);
        switch (e.target.name) {
            case "email":
                this.props.signInEmail(this.state.email, this.state.password );
                break;
            case "facebook":
                this.props.signInFacebook();
                break;
            case "google":
                this.props.signInGoogle();
                break;
            case "twitter":
                this.props.signInTwitter();
                break;
            default:
                console.log("DEFAULT ONCLICK FUNC");
        }
    };


    onChange = e => {
        switch (e.target.name) {
            case "email":
                this.setState({ ...this.state , email : e.target.value});
                break;
            case "password":
                this.setState({ ...this.state , password : e.target.value})
                break;
            default:
                console.log("DEFAULT ONCHANGE FUNC");
        };
    };


    render() {
        return (
            <div className="Login">
                <div className="Login-header">
                    <Row>
                        <Col md="6">
                            <h4>Log In </h4>
                        </Col>
                        <Col md="6">
                            <Link to={ROUTES.SIGN_UP} className="float-right">
                                Create Account
                            </Link>
                        </Col>
                        <Col md="12" />
                    </Row>
                </div>
                <div className="Login-form">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                // onBlur={this.handleUserInput}
                                type="email"
                                name="email"
                                onChange={this.onChange}
                                //type="text"
                                placeholder="Email Address"
                            />
                            <small>We'll never share your email with anyone else.</small>
                            {/*emailErrorMsg*/}
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                name="password"
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
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
                                <Link className="float-right" to={ROUTES.FORGOT_PASSWORD}>
                                    Forgot Password
                                </Link>
                            </Col>
                        </Row>
                        <br />
                        <Button color="primary" onClick={this.onClick}>Log In</Button>
                    </Form>
                    <br />
                    <div className="Social-form">
                        <Button id="facebook" name="facebook" color="primary" block onClick={this.onClick}>
                            Log In with Facebook
                        </Button>
                        <Button id="google" name="google" color="secondary" block onClick={this.onClick}>
                            Log In with Google
                        </Button>
                        <Button id="twitter" name="twitter" color="success" block onClick={this.onClick}>
                            Log In with Twitter
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);