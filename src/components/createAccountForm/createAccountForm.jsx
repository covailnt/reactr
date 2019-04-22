import React, { Component } from "react";
import { Button, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

import { onChange, mapStateToProps, mapDispatchToProps } from "./actions";

class CreateAccountForm extends Component {
  render() {
    return (
      <div className="Access">
        <div className="Access-header">
          <Row>
            <Col md="6">
              <h4>Create Account</h4>
            </Col>
            <Col md="6">
              <a className="float-right">Log In</a>
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
          <Button id="facebook" color="primary" block>
            Sign Up with Facebook
          </Button>
          <Button id="google" color="secondary" block>
            Sign Up with Google
          </Button>
          <Button id="twitter" color="success" block>
            Sign Up with Twitter
          </Button>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountForm);
