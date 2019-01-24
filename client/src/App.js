import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./pages/UserLogin";
import RegisterRestaurant from "./components/RegisterRestaurant";
import RegisterUser from "./components/RegisterUser";
import FloorPlan from "./pages/FloorPlan";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register/restaurant" component={RegisterRestaurant} />
          <Route exact path="/register/user" component={RegisterUser} />
          <Route path="/floorplan" component={FloorPlan} />
        </div>
      </Router>
    );
  }
}

export default App;
