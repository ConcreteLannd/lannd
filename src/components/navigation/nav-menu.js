import React, {Component} from "react";

export default class navBar extends React.Component {
  render() {
    return (
      this.props.navLinks.map((c) => <li><a href={c.href} key={c.href} > {c.name} </a></li>)
    )
  }
}
