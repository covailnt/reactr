import React, { Component } from "react";

import { Button, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

import { connect } from 'react-redux';

class CreateAccountForm extends Component {

  onChange = (e) => {
    console.log(e.target.value);
    switch (e.target.name){
      case 'email':
        this.props.setEmail(e.target.value)
        break;
      case 'password':
        this.props.setPassword(e.target.value)
        break;
      default:
        return;
    }
  }

  render() {
    return (
        <div className="Access">
          <div className="Access-header">
            <Row>
              <Col md="6">
                <h4>Create Account</h4>
              </Col>
              <Col md="6">
                <a className="float-right">
                  Log In
                </a>
              </Col>
            </Row>
          </div>
          <div className="Create-account-form">
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  onChange={this.onChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e@mail.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  onChange={this.onChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirm-password">Confirm Password</Label>
                <Input
                  
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="password"
                />
              </FormGroup>
              <Button>Create Account</Button>
            </Form>
          </div>
          <br />
          <div className="Access-header">
            <Row>
              <Col md="12">
                <h4>Or:</h4>
              </Col>
            </Row>
          </div>
          <br />
          <div className="Social-form">
            <Button
             
              id="facebook"
              color="primary"
              block
            >
              Sign Up with Facebook
            </Button>
            <Button
              
              id="google"
              color="secondary"
              block
            >
              Sign Up with Google
            </Button>
            <Button
             
              id="twitter"
              color="success"
              block
            >
              Sign Up with Twitter
            </Button>
          </div>
        </div>
     
    );
  }
}

const mapStateToProps = state => ({ email: state.email })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email }),
    setPassword: (password) => dispatch({ type: 'SET_PASSWORD', payload: password }),
    createAccount: (user) => dispatch({ type: 'CREATE_ACCOUNT', payload: user })
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);