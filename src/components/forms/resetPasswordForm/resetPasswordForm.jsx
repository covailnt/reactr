import React, {Component} from "react";
import { connect } from "react-redux";
import { Button, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";




const mapDispatchToProps = dispatch => {
  return {
      resetPassword: (email, password) => dispatch({type:"RESET_PASSWORD_SAGA", payload: {email}})
  };
};




class ResetPassword extends Component {


  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.resetPassword(this.state.email);
      
  };


  onChange = e => {this.setState({ ...this.state , email : e.target.value})};


  render(){
    return (
      <Row className="Reset-password">
        <Col sm="12" md="12">
          <Form>
            <FormGroup>
              <Label for="current-password">Current password</Label>
              <Input
                type="text"
                name="current-password"
                id="current-password"
                placeholder="Enter Password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="new-password">New password</Label>
              <Input
                type="text"
                name="new-password"
                id="new-password"
                placeholder="Enter New Password"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirm-new-password">Confirm New Password</Label>
              <Input
                type="text"
                name="confirm-new-password"
                id="confirm-new-password"
                placeholder="Confirm New Password"
              />
            </FormGroup>
            <FormGroup>
              <a href>Cancel</a>
              <br />
              <Button onClick = {this.onClick}>Reset Password</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
    }
}

export default connect(mapDispatchToProps)(ResetPassword);