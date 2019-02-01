import React, { Component } from "react";
import LoginButton from "./NavBarButtons/LoginButton";
import LogoutButton from "./NavBarButtons/LogoutButton";
import logo from "../Images/WHlogo.jpg";

const style = {
  logo: {
    height: "55px",
    width: "45px",
    color: "#ffc107"
  },
  name: {
    color: "#ffc107"
  }
};
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  state = {
    login: false,
  }

  render() {
    if(sessionStorage.getItem("login") != this.state.login) {
      this.setState({ login: sessionStorage.getItem("login") })
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} style={style.logo} alt="logo" />
        </a>
        <a className="navbar-brand" id="nameH" href="/" style={style.name}>
          Webster Halsted
      </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="ml-auto">
          {console.log("login", sessionStorage.getItem("login"))}
          {/* {sessionStorage.getItem("login") ? <LoginButton /> : <LogoutButton />} */}
          <LoginButton />
          <LogoutButton />
        </div>
      </nav>
    );
  }
}

export default Navbar;
