import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { Button, Form, Row, Col, FormGroup, Label, Input, Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../../routes/constants"


class Profile extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <Row className="Account-widget Account-profile">
                <Col sm="12" md="3">
                    <h4>Profile</h4>
                </Col>
                <Col sm="12" md="9">
                    <Form>
                        <FormGroup>
                            <Label for="profilePhoto">Upload Profile Photo</Label>
                            <Input
                                type="file"
                                name="profilePhoto"
                                id="profilePhoto"
                                placeholder="Choose file"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileName">Name</Label>
                            <Input
                                type="text"
                                name="profileName"
                                id="profileName"
                                placeholder="Enter Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileEmailAddress">Email address</Label>
                            {/** emailErrorMessag*/}
                            <Input
                                type="text"
                                name="profileEmailAddress"
                                id="profileEmailAddress"
                                placeholder="email@address.com"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Link to={ROUTES.SIGN_IN}>Reset Password, but takes you to sign in right now</Link>
                        </FormGroup>

                        <Label>
                            <h5>Notifications</h5>
                        </Label>
                        <br />

                        <Label> App Notifications</Label>

                        <Button
                            name="appNotifications"
                            size="small"
                            className="float-right"
                        >

                        </Button>
                        <br />
                        <br />
                        <Label> Email Notifications</Label>
                        <Button
                            name="emailNotifications"
                            size="small"
                            className="float-right"

                        >
                        </Button>

                        <br />
                        <br />

                        <Button>Save Profile</Button>
                        <Button onClick={this.handleSignOut}>Sign Out</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default withRouter(Profile);