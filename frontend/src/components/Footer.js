import { Component } from "react";
import "../styles/footer.css";
import GitHubLogo from "../images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
const { GetClientIP } = require("../services/GetClientIP");

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIP: "",
    };
  }

  componentDidMount() {
    GetClientIP()
      .then((res) => this.setState({ clientIP: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <footer>
        <div className="ip-address">
          {this.state.clientIP ? (
            <div>Your Current IP Address is {this.state.clientIP}</div>
          ) : (
            <div>Unknown Client IP</div>
          )}
        </div>
        <div className="credit">
          <a
            href="https://github.com/terrylcc"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubLogo} alt="To My GitHub Profile"></img>
          </a>
          <div>Designed & Created By Terry Leung</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
