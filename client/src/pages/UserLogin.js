import React from "react";
import Login from "../components/Login/index";
// import API from "../utils/API";
// import { concat } from "rxjs";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default UserLogin;
