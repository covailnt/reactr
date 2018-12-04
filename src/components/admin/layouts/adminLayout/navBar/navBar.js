import React, { Component } from "react";
import "./navBar.css";

class navBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return <div id="navBar-div" />;
  }
}

export default navBar;
