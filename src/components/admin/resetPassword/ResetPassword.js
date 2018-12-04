import React from "react";
import Admin from "../layouts/adminLayout/adminLayout";
import { Button, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

function ResetPassword(props) {
  return (
    <Admin>
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
              <Button>Reset Password</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Admin>
  );
}

export default ResetPassword;
