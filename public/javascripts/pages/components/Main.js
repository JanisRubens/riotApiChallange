import React from "react";


export default class Main extends React.Component {
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
      <main>
       {this.props.content}
      </main>
    );
  }
}