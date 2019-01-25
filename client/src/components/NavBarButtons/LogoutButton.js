import React, { Component } from "react";

class LoginButton extends Component {
  LogOut = event => {
    event.preventDefault();
    console.log(event);
    sessionStorage.setItem("userID", undefined);
    sessionStorage.setItem("restID", undefined);
    sessionStorage.setItem("login", undefined);
    window.location.assign('/');
  };

  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a onClick={this.LogOut} className="nav-link" href="/">Log Out<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginButton;
