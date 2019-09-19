import React from "react";
import { Container, Row, Col } from "reactstrap";
import './front.css';
function Front(props) {
  return (

    <Container fluid={true} className="App-container">
      <Row>
        <Col sm="12" md="7" className="mainPanel">
          <br />
          <h2>React'r Boilerplate</h2>
          <br />

          {props.children}


        </Col>

        <Col sm="12" md="5" className="background-col">
          <img
            className="background-img"
            src="https://covailnt.com/wp-content/uploads/2017/04/FreelanceHeroFlat.png"
            alt="App Graphic"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Front;