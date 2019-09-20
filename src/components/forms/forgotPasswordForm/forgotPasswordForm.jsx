import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col, FormGroup, Label, Input, FormText } from "reactstrap";
import * as ROUTES from "../../../routes/constants";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return{ resetPassword: (email) => dispatch( {type:"RESET_PASSWORD_SAGA", payload: { email: email}  }  )   }
};

class ForgotPassword extends Component {


  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      email:""
    };
  }

  onClick = (e) => {
      e.preventDefault();
      this.isValid()  ? this.props.resetPassword(this.state.email ) : window.alert("EMAIL & PASS NOT VALID");
      window.alert("You have reset your password")
  };

  onChange = e => {
            this.setState({ ...this.state , email : e.target.value});
  }




  //      TODO ADD VALIDATION
  //
  isValid = () => {return true};


  render(){
    return (
      <div className="Access">
        <div className="Access-header">
          <Row>
            <Col md="6">
              <h4>Forgot Password</h4>
            </Col>
            <Col md="6">
              <Link className="float-right" to={ROUTES.SIGN_IN}>
                Log In
              </Link>
            </Col>
          </Row>
        </div>
        <div className="Create-account-form">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Enter Email address</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="e@mail.com"
                onChange={this.onChange}
              />
              <FormText color="muted">
                We'll send you a link to reset your password
              </FormText>
            </FormGroup>
            <Button onClick={this.onClick}>Reset Password</Button>
          </Form>
        </div>
      </div>
    );
  }

}
export default connect(null, mapDispatchToProps)(ForgotPassword);
