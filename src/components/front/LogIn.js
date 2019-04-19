import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class LogIn extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <Row>
            <Col md="6">
              <h4>Log In</h4>
            </Col>
            <Col md="6">
              <a className="float-right">Create Account</a>
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
                value={email}
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
                value={password}
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
                <Link className="float-right" to="/forgot-password">
                  Forgot Password
                </Link>
              </Col>
            </Row>
            <br />
            <Button color="primary">Log In</Button>
          </Form>
          <br />
          <div className="Social-form">
            <Button id="facebook" color="primary" block>
              Log In with Facebook
            </Button>
            <Button id="google" color="secondary" block>
              Log In with Google
            </Button>
            <Button id="twitter" color="success" block>
              Log In with Twitter
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default logIm;
