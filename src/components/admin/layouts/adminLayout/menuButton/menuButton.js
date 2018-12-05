import React, { Component } from "react";
import "./menuButton.css";

class SlidingMenuButton extends Component {
  render() {
    var buttonPlacement = "left";
    if (this.props.menuVisibility) {
      buttonPlacement = "right";
      console.log("visibility should be set to show");
    }
    return (
      <button
        id="roundButton"
        onClick={this.props.handleOnClick}
        className={buttonPlacement}
      />
    );
  }
}

export default SlidingMenuButton;
