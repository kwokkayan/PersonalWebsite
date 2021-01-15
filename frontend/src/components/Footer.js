import { Component } from "react";
const { GetClientIP } = require("../api/ClientIP");

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIP: "",
    };
    this.setState({
      clientIP: GetClientIP(),
    });
  }

  render() {
    return (
      <footer>
        <div className="IPAddress">
          {this.state.clientIP ? (
            <h3>Your Current IP Address is {this.state.clientIP}</h3>
          ) : (
            <h3>Waiting</h3>
          )}
        </div>
        <div className="credit">
          <div>Github</div>
          <h3>Designed & Created By Terry Leung</h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
