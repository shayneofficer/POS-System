import React from "react";
import Menu from "../../../components/Menu/index.jsx";
// import { Row, Col } from "react-bootstrap";
import {Row, Col} from "../../../components/Grid";
import API from "../../../utils/API";
import "./index.css";

class OrderPage extends React.Component {
  state = {
    restaurant: {},
    categories: []
  };

  componentDidMount = () => {
    this.showItems();
  };

  getMenu = () => {
    this.getRestaurant((result) => {
      const Restaurant = result;
      console.log(Restaurant);
      const Menu = Restaurant.Menus[0];
      const Categories = Menu.Categories;
      this.setState({
        restaurant: Restaurant,
        categories: Categories
      });
    });
  };

  getRestaurant = (callback) => {
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  showItems = () => {
    this.getMenu();
  };


  


  render () {
    return (
      <Row>
        <Col size="sm-4">
          <div className="box">
            <h3>Placeholder</h3>
          </div>
        </Col>
        <Col size="sm-8">
          <div className="box">
            <Menu categories={this.state.categories} />
          </div>
        </Col>
      </Row>
    );
  }
}
export default OrderPage;
