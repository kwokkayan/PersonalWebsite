import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="logo">terrylcc</div>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="private-zone-btn" to="/private-zone">
              Private Zone
            </NavLink>
          </li>
        </ul>
        <div className="burger" onClick={activateBurger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    );
  }
}

const activateBurger = () => {
  const nav = document.querySelector("header ul");
  const burger = document.querySelector("header .burger");
  const navLi = document.querySelectorAll("header ul li");

  // Toggle Navbar
  nav.classList.toggle("burgerIsClick");
  burger.classList.toggle("burgerIsClick");

  // Navbar Fading Anmination
  navLi.forEach((li, index) => {
    if (li.style.animation) {
      li.style.animation = "";
    } else {
      li.style.animation = `fade 0.3s ease forwards ${index / 7 + 0.5}s`;
    }
  });
};

export default withRouter(Header);
