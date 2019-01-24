import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default Home;
