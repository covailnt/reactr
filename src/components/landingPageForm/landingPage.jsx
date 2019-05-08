import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

const LandingPgeForm = (props) => {
    return (
        <div className="Access">
            <div className="Access-header">
                <Row>
                    <Col md="6">
                        <h4>Landing Page Comming Soon</h4>
                    </Col>
                </Row>
            </div>
            <div className="Create-account-form">
                <Form>
                    <Button>Log Out</Button>
                </Form>
            </div>
        </div>
    );
}

export default LandingPageForm;
