import React, { Component } from "react";
import { connect } from "react-redux";
import { setEmail, setPassword } from "../../../store/actions/userActions";
import { Button, Form, Row, Col, FormGroup, Label, Input, FormText } from "reactstrap";




const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        email: state.email,
        password: state.password
    };
};


const mapDispatchToProps = dispatch => {
    return {
        setEmail: email => dispatch(setEmail(email)),
        setPassword: password => dispatch(setPassword(password)),
        logout: () => {
            dispatch({ type: "LOGOUT_SAGA", payload: {} })
        }
    };
};



class LandingPageForm extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

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
                        <Button color="secondary" onClick={this.onClick}>Log Out</Button>
                    </Form>
                </div>
            </div>
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LandingPageForm);
