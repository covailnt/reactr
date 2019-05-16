import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Row, Col, FormGroup, Label, Input, FormText } from "reactstrap";



const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch({ type: "SIGN_OUT_SAGA", payload: {} })
        }
    };
};



class SignOutForm extends Component {


    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.signOut();
        e.preventDefault();
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



export default connect(mapStateToProps, mapDispatchToProps)(SignOutForm);
