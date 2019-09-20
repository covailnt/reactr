import React, { Component } from "react";
import { Button, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isValidFormat } from "@firebase/util";

const mapStateToProps = state => {return {loggedIn: state.loggedIn}};

const mapDispatchToProps = dispatch => {return{ signUp: (email, password) => dispatch({type:"SIGN_UP_EMAIL_SAGA", payload: { email, password}})}};

class CreateAccountForm extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      email:"",
      password:"",
      confirmPassword:""
    };
  }

  onClick = (e) => {
      e.preventDefault();
      this.isValid()  ? this.props.signUp(this.state.email, this.state.password ) : window.alert("EMAIL & PASS NOT VALID");
  };




  //      TODO ADD VALIDATION
  //
  isValid = () => {return true}





onChange = e => {
    switch (e.target.name) {
        case "email":
            this.setState({ ...this.state , email : e.target.value});
            break;
        case "password":
            this.setState({ ...this.state , password : e.target.value})
            break;
        case "confirmPassword":
            this.setState({ ...this.state , password : e.target.value})
            break;
        default:
            console.log("DEFAULT ONCHANGE FUNCTION");
    }
};


  render() {
    return (
      <div className="Access">
        <div className="Access-header">
          <Row>
            <Col md="6">
              <h4>Create Account</h4>
            </Col>
            <Col md="6">
              <Link to="/" className="float-right">
                Log In
              </Link>
            </Col>
          </Row>
        </div>
        <div className="Create-account-form">
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="e@mail.com"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirm-password">Confirm Password</Label>
              <Input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="password"
                onChange={this.onChange}
              />
            </FormGroup>
            <Button onClick={this.onClick}>Create Account</Button>
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
