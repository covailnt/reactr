import React, { Component } from "react";
import { setEmail, setPassword, logout } from "../../../store/actions/userActions";
import { connect } from "react-redux";

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

const mapDispatchToProps = dispatch => {
    return {
        setEmail: email => dispatch(setEmail(email)),
        setPassword: password => dispatch(setPassword(password)),
        logout: () => dispatch(logout())
    };
};


class LandingPageForm extends Component {

    onClick() {
        this.props.logout();
    }

    render() {
        return (
            <div className="Access" >
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

}

export default connect(mapDispatchToProps)(LandingPageForm);
