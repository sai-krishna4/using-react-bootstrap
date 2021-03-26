import React, { Component } from "react";
import { Image } from "react-bootstrap";

class SingleComponent extends Component {
  render() {
    return (
      <div>
        <Image
          src="https://dummyimage.com/170x180/000/fff.png&text=TEST123"
          thumbnail
        />
      </div>
    );
  }
}

export default SingleComponent;
