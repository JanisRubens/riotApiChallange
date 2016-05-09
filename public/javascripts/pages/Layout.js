import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Link } from "react-router";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }
        //<Header></Header>dont need it
  render() {
    return (
      <div id="main-wraper">
        <Main content = {this.props.children} ></Main>
        <Footer></Footer>
      </div>
    );
  }
}