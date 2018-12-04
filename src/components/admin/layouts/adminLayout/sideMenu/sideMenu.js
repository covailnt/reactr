import React, { Component } from "react";
import "./sideMenu.css";

class sideMenu extends Component {
  /*
  getMenuItems = props => {
    return props.menuItems.map(menuItems => {
      return <h2>{menuItems}</h2>;
    });
  };
*/
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
      console.log("visibility should be set to show");
    }

    return <div id="sideMenuDiv" className={visibility} />;
  }
}

export default sideMenu;
