import React, { Component } from 'react';
import reactstrapCjs, { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import './DeleteAccount.css';
class DeleteAccount extends Component {
    state = {
        values: {
            deleteAccount: ''
        },
        formValid: false
    }
    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({ values: { [name]: value } },
            () => { this.validateField() });
    }
    validateField() {
        this.setState({
            formValid: this.state.values.deleteAccount.match(/^DELETE$/)
        });

    }

    render() {
        return (
            <Row className="Account-widget Account-delete-account" >
                <Col sm="12" md="3">
                    <h4>Delete Account</h4>
                </Col>
                <Col sm="12" md="9">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Type "DELETE" to delete your account</Label>
                            <Input
                                type="text"
                                name="deleteAccount"
                                id="deleteAccount"
                                onChange={(event) => this.handleUserInput(event)}
                                placeholder="Type DELETE" />
                        </FormGroup>
                        <Button disabled={!this.state.formValid}>Delete Account</Button>
                    </Form>
                </Col>
            </Row>
        );
    }

}

export default DeleteAccount;