import React, { Component } from "react";
import API from '../utils/API';
import { Input, FormBtn } from './Form';
import LogoutButton from './NavBarButtons/LogoutButton'

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

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
      email: this.state.email,
      password: this.state.password,
    }
    console.log("login submit", submit);
    API.userLogin(submit).then(res => {
      console.log("res.data", res.data);
      if (res.data.err) {
        console.log("Error: ", res.data.err);
      } else if (res.data.login) {
        console.log(res.data);
        sessionStorage.setItem("userID", res.data._id);
        sessionStorage.setItem("restID", res.data.restaurantID);
        sessionStorage.setItem("login", res.data.login);
        window.location.href="/";
      }

    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form action="/action_page.php">
          <Input onChange={this.handleInputChange} type="text" name="email" placeholder="Email" />
          <Input onChange={this.handleInputChange} type="password" name="password" placeholder="Password" />
          <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
        </form>
        <p id="loginError"></p>
      </div>
    );
  }
}

export default Login;
