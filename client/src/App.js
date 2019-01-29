import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/UserLogin";
import RegisterRestaurant from "./components/RegisterRestaurant";
import RegisterUser from "./components/RegisterUser";
import FloorPlan from "./pages/post-login/FloorPlan";
import HomeNoLogin from "./pages/no-login/Home";
import Home from "./pages/post-login/Home";
import OrderPage from "./pages/post-login/OrderPage/index";
import reservationList from "./pages/post-login/reservationlist";
import Reservations from "./pages/no-login/Reservations";
import NavBar from "./components/NavBar";
import restaurantHome from "./pages/no-login/RestaurantHome";


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
          <Route path="/order" component={OrderPage} />
          <Route path="/restlogin" component={Home} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/reservationlist" component={reservationList} />
          <Route path="/restaurantHome" component={restaurantHome} />
        </div>
      </Router>
    );
  }
}

export default App;
