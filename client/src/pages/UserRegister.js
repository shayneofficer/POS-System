import React from "react";
import RegisterUser from "../components/RegisterUser";

class UserRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RegisterUser />
      </div>
    );
  }
}

export default UserRegister;
