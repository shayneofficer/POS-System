import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/login">Restaurant Login<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginButton;
