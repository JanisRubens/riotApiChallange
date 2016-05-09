import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const Page_oneClass = location.pathname === "/" ? "active" : "";
    const Page_twoClass = location.pathname.match(/^\/Page_two/) ? "active" : "";
    const Page_threeClass = location.pathname.match(/^\/Page_three/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <ul class="nav navbar-nav">
          <li class={Page_oneClass}>
            <IndexLink to="/" onClick={this.toggleCollapse.bind(this) }>Page_one</IndexLink>
          </li>
          <li class={Page_twoClass}>
            <Link to="Page_two" onClick={this.toggleCollapse.bind(this) }>Page_two</Link>
          </li>
          <li class={Page_threeClass}>
            <Link to="Page_three" onClick={this.toggleCollapse.bind(this) }>Page_three</Link>
          </li>
        </ul>
      </nav>
    );
  }
}