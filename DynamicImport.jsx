import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";

class DynamicImport extends Component {
  render() {
    return (
      <ReactBootstrap.Button bsStyle="success" bsSize="small">
        Something
      </ReactBootstrap.Button>
    );
  }
}

export default DynamicImport;
