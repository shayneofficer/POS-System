import React, { Component } from 'react';
import { Input, FormBtn } from './Form';
import API from "../utils/API";

class Register extends Component {
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
      name: this.state.name,
      email: this.state.email,
    }
    console.log(submit);
    API.createRestaurant(submit).then(res => {
      this.displayRestaurants();
    }).catch(err => console.log(err));
  }

  displayRestaurants = () => {
    API.getRestaurants()
      .then(res => {
        console.log(res);
        this.setState({ books: res.data, name: "", email: "" })
      }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <Input onChange={this.handleInputChange} name="name" placeholder="Restaurant Name" />
          <Input onChange={this.handleInputChange} name="email" placeholder="Email" />
          <FormBtn onClick={this.handleFormSubmit}>Create New Restaurant</FormBtn>
        </form>
      </div>
    );
  }
}

export default Register;
