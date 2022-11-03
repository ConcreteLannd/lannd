import React, {Component} from "react";
import NavMenu from "./nav-menu";
import './navigation.css';

const theLinks = [
  {
    name: "home",
    href: "/index"
  },
  {
    name: "about",
    href: "/index"
  },
  {
    name: "shop",
    href: "/index"
  },
  {
    name: "contact",
    href: "/index"
  },
  {
    name: "subs",
    href: "/subs"
  },
]

export default class Nav extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: theLinks
    }
  }

  render() {
    return (
      <ul className="menu">
        <NavMenu navLinks={this.state.navLinks} />
      </ul>
    );
  } 
}
