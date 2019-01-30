import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/UserLogin";
import RegisterRestaurant from "./components/RegisterRestaurant";
import RegisterUser from "./components/RegisterUser";
import FloorPlan from "./pages/post-login/FloorPlan";
import Main from "./pages/no-login/Main";
import Home from "./pages/post-login/Home";
import OrderPage from "./pages/post-login/OrderPage/index";
import ReservationList from "./components/reservationlist";
import Reservations from "./pages/no-login/Reservations";
import NavBar from "./components/NavBar";
import RestaurantHome from "./pages/no-login/restaurantHome";
import ShineMenu from "./pages/post-login/PublicMenu/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/register/restaurant"
            component={RegisterRestaurant}
          />
          <Route exact path="/register/user" component={RegisterUser} />
          <Route path="/floorplan" component={FloorPlan} />
          <Route path="/order" component={OrderPage} />
          <Route path="/restlogin" component={Home} />
          <Route path="/shinemenu" component={ShineMenu} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/reservationlist" component={ReservationList} />
          <Route path="/restaurantHome" component={RestaurantHome} />
        </div>
      </Router>
    );
  }
}

export default App;
