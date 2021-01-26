import { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <header>
          <div className="logo">Personal Website</div>
          <ul>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink className="privateZone" to="/private-zone">
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
      </Router>
    );
  }
}

const activateBurger = () => {
  const nav = document.querySelector("header ul");
  const burger = document.querySelector("header .burger");
  const navLi = document.querySelectorAll("header ul li");

  // Toggle Navbar
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  // Navbar Fading Anmination
  navLi.forEach((li, index) => {
    if (li.style.animation) {
      li.style.animation = "";
    } else {
      li.style.animation = `fade 0.3s ease forwards ${index / 7 + 0.5}s`;
    }
  });
};

export default Header;
