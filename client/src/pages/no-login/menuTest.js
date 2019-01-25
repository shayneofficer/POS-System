import Menu from "../../components/MenuWithAPI"
import React from "react";

class menuTest extends React.Component {
  state = {
    // restaurantId = 
  }
  render() {
    return (
      <div>
        <h1>Home pages</h1>
        <a href="/login">User Login</a>
        <a href="/register/restaurant">Register Restaurant</a>
        <a href="/register/user">Register User</a>
      </div>
    );
  }
}

export default menuTest;
