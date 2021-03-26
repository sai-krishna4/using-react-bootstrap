import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

class MultipleImport extends Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name..." />
          </Col>
          <Col>
            <Form.Control placeholder="Last name..." />
          </Col>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default MultipleImport;
