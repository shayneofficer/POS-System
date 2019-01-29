import React from "react";
import Menu from "../../../components/Menu/index.jsx";
// import { Row, Col } from "react-bootstrap";
import { Row, Col } from "../../../components/Grid";
import API from "../../../utils/API";
import "./index.css";

class OrderPage extends React.Component {
  state = {
    restaurant: {},
    categories: [],
    orderedItems: []
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

  orderItem = (i) => {
    console.log(i);
    let array = this.state.orderedItems;
    array.push(i);
    this.setState({
      orderedItems: array
    });
  };

  render () {
    return (
      <Row>
        <Col size="sm-4">
          <div className="box">
            <h3>Placeholder</h3>
            <ul>
              {this.state.orderedItems.map((item, i) => {
                return (
                  <li key={i}>
                    {item.name} + {item.price}
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col size="sm-8">
          <div className="box">
            <Menu
              categories={this.state.categories}
              orderItem={this.orderItem}
            />
          </div>
        </Col>
      </Row>
    );
  }
}
export default OrderPage;
