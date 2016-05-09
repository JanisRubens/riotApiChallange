import React from "react";
import Navigation from "./Navigation.js";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <header>
        <Navigation location={location} ></Navigation>
      </header>
    );
  }
}