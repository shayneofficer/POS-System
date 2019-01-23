import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form action="/action_page.php">
          Restaurant Code: <br />
          <input type="text" name="restaurantID" value="Restaurant" />
          <br />
          Username:
          <br />
          <input type="text" name="username" value="Username" />
          <br />
          Password:
          <br />
          <input type="text" name="password" value="Password" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
