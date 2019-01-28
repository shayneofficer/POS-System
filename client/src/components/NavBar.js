import React from "react";
import LoginButton from "./NavBarButtons/LoginButton";
import LogoutButton from "./NavBarButtons/LogoutButton";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  if (sessionStorage.getItem("login") == null) {
    sessionStorage.setItem("login", undefined);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">POS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {sessionStorage.getItem("login") ? <LoginButton/> : <LogoutButton/>}
    </nav>
  );
}

export default Navbar;
