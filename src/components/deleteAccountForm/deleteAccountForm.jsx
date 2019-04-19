import React, { Component } from "react";
import { Button, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
class DeleteAccount extends Component {
  render() {
    return (
      <Row className="Account-widget Account-delete-account">
        <Col sm="12" md="3">
          <h4>Delete Account</h4>
        </Col>
        <Col sm="12" md="9">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Type "DELETE" to delete your account
              </Label>
              <Input
                type="text"
                name="deleteAccount"
                id="deleteAccount"
                onChange={event => this.handleUserInput(event)}
                placeholder="Type DELETE"
              />
            </FormGroup>
            <Button disabled={!this.state.formValid}>Delete Account</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default DeleteAccount;
