import React from "react";
import Menu from "../../../components/Menu/index.jsx";
import { Container, Row, Col } from "../../../components/Grid";
import API from "../../../utils/API";
import "./index.css";
import OrderForm from "../../../components/OrderForm";

class OrderPage extends React.Component {
  state = {
    restId: sessionStorage.getItem("restID"),
    restaurant: {},
    categories: [],
    orderedItems: [],
    tables: []
  };

  componentDidMount = () => {
    console.log(this.state.restaurantId);
    this.showItems();
  };

  getMenu = () => {
    this.getRestaurant((result) => {
      const Restaurant = result;
      const Menu = Restaurant.Menus[0];
      const Categories = Menu.Categories;
      let tableArr = []
      for (let i = 0; i < Restaurant.Tables.length; i++) {
        tableArr.push(i);
      }
      this.setState({
        restaurant: Restaurant,
        categories: Categories,
        restId: Restaurant._id,
        tables: tableArr
      });
    });
  };

  getRestaurant = (callback) => {
    API.getRestaurants().then((restaurants) => {
      console.log(restaurants);
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  showItems = () => {
    this.getMenu();
  };

  orderItem = (i) => {
    let array = this.state.orderedItems;
    array.push(i);
    this.setState({
      orderedItems: array
    });
  };

  getTickets = (e) => {
    e.preventDefault();
    let tickets = this.state.restaurant.Receipts;
    console.log(tickets);
  };

  saveTicket = (e) => {
    e.preventDefault();
    let Receipts = this.state.restaurant.Receipts;
    let restId = this.state.restaurant._id;
    let price = 0;
    this.state.orderedItems.map((item) => {
      price += item.price;
    });
    let ticket = {
      isPaid: false,
      amountCharged: price,
      amountPaid: 0,
      date: new Date(Date.now())
    };
    Receipts.push(ticket);
    console.log("Receipt Added: " + ticket);

    API.updateRestaurant(restId, Receipts).then((result) => {
      this.setState({
        orderedItems: []
      });
    });
  };

  render () {
    return (
      <Container>
        <Row>
          <Col size="sm-4">
            <OrderForm
              tables={this.state.tables}
              items={this.state.orderedItems}
              saveTicket={this.saveTicket}
            />
          </Col>
          <Col size="sm-8">
            <div className="box">
              <Menu
                tables={this.state.tables}
                categories={this.state.categories}
                orderItem={this.orderItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default OrderPage;
