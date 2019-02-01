import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";
import LogoutButton from "../NavBarButtons/LogoutButton";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // console.log(`${name}: ${value}`);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit");
    const submit = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("login submit", submit);
    API.userLogin(submit)
      .then((res) => {
        console.log("res.data", res.data);
        if (res.data.login) {
          console.log(res.data);
          sessionStorage.setItem("userID", res.data._id);
          sessionStorage.setItem("restID", res.data.restaurantID);
          sessionStorage.setItem("login", res.data.login);
          window.location.href = "/Floorplan";
        } else {
          this.setState({
            errorMessage: "Incorrect Username or Password"
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render () {
    return (
      <div className="row" id="LoginRow">
        <div id="LoginForm">
          <form action="/action_page.php">
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="email"
              placeholder="Email"
            />
            <Input
              onChange={this.handleInputChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
          </form>
          <p id="LoginError" className="text-danger mt-2">
            {this.state.errorMessage}
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
