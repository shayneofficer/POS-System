import React, { Component } from "react";
import API from '../utils/API';

class Login extends Component {
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // console.log(`${name}: ${value}`);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit");
    const submit = {
      restaurantID: this.state.restaurantID,
      username: this.state.username,
      password: this.state.password,
    }
    API.userLogin(submit).then(res => {
      console.log("res.data", res.data);
      sessionStorage.setItem("userID", res.data._id);
      sessionStorage.setItem("restID", res.data.restaurantID);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form action="/action_page.php">
          Restaurant Code: <br />
          <input onChange={this.handleInputChange} type="text" name="restaurantID" />
          <br />
          Username:
          <br />
          <input onChange={this.handleInputChange} type="text" name="username" />
          <br />
          Password:
          <br />
          <input onChange={this.handleInputChange} type="text" name="password" />
          <br />
          <br />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
