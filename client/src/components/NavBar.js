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
    login: 0
  };
  componentWillMount = () => {
    if (sessionStorage.getItem("login") !== this.state.login) {
      // console.log("ss", sessionStorage.getItem("login"))
      let localLogin = sessionStorage.getItem("login");
      // console.log("local login", localLogin);
      this.setState({
        login: localLogin
      });
    }
  };

  render () {
    let Logged = <LoginButton/>
    // console.log("state login if", this.state.login)
    if(this.state.login) {
      // console.log("out")
      Logged = <LogoutButton />
    } else {
      // console.log("in")
      Logged = <LoginButton />
    }
    // console.log("Logged",Logged);
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
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="ml-auto">
          {Logged}
        </div>
      </nav>
    );
  }
}

export default Navbar;
