import React, { Component } from "react";

const style = {
  login: {
    marginLeft: "950px",
    align: "right",
    fontSize: "1.3rem",
    color: "#ffc107"
  },
};

class LoginButton extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/login" style={style.login}>Login<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginButton;
