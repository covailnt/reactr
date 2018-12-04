import React from "react";
import { Row, Col } from "reactstrap";
import Admin from "../layouts/adminLayout/adminLayout";

function Page(props) {
  return (
    <Admin>
      <Row className="Admin-page">
        <Col sm="12" md="12">
          <h1>Future App Page</h1>
        </Col>
      </Row>
    </Admin>
  );
}

export default Page;
