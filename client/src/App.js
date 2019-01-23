import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import RegisterRestaurant from "./components/RegisterRestaurant";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/restaurant" component={RegisterRestaurant} />
        {/* <Route exact path="/register/user" component={RegisterUser} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
