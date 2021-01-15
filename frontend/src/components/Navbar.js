import { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <nav className="Navbar">
          <div>LOGO</div>
          <div>
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="/auth">PRIVATE ZONE</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
    );
  }
}

export default Navbar;
