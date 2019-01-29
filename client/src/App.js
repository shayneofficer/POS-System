import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/UserLogin";
import RegisterRestaurant from "./components/RegisterRestaurant";
import RegisterUser from "./components/RegisterUser";
import FloorPlan from "./pages/post-login/FloorPlan";
import HomeNoLogin from "./pages/no-login/Home";
import Home from "./pages/post-login/Home";
import Order from "./pages/post-login/OrderInput";
// import OrderPage from "./pages/post-login/OrderPage/index";
import ReservationList from "./pages/post-login/ReservationList";
import Reservations from "./pages/no-login/Reservations";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeNoLogin} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/register/restaurant"
            component={RegisterRestaurant}
          />
          <Route exact path="/register/user" component={RegisterUser} />
          <Route path="/floorplan" component={FloorPlan} />
          <Route path="/order" component={Order} />
          {/* <Route path="/order" component={OrderPage} /> */}
          <Route path="/restlogin" component={Home} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/reservationlist" component={ReservationList} />
        </div>
      </Router>
    );
  }
}

export default App;
