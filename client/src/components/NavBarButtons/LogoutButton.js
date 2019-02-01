import React, { Component } from "react";

const style = {
  login: {
    fontSize: "1.3rem",
    color: "#ffc107"
  },
};

class LogoutButton extends Component {
  LogOut = event => {
    event.preventDefault();
    console.log(event);
    sessionStorage.setItem("userID", 0);
    sessionStorage.setItem("restID", 0);
    sessionStorage.setItem("login", "");
    window.location.assign('/');
    // console.log("SS login", sessionStorage.getItem("login"))
  };

  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav" style={style.navbar}>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a onClick={this.LogOut} className="nav-link" href="/" style={style.login}>Log Out<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LogoutButton;
