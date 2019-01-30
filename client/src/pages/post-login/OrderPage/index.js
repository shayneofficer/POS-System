import React from "react";
import Menu from "../../../components/Menu/index.jsx";
import { Container, Row, Col } from "../../../components/Grid";
import Button from "react-bootstrap/Button";
import API from "../../../utils/API";
import "./index.css";
import OrderForm from "../../../components/OrderForm";

class OrderPage extends React.Component {
  state = {
    restId: sessionStorage.getItem("restID"),
    restaurant: {},
    categories: [],
    orderedItems: [],
    tables: [],
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
      Restaurant.Tables.map((table, i) => {
        tableArr.push(table);
      })
      this.setState({
        restaurant: Restaurant,
        categories: Categories,
        restId: Restaurant._id,
        tables: tableArr
      });
      console.log(this.state.tables);
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

  saveTicket = (e, tableIndex) => {
    e.preventDefault();
    if (tableIndex < 0) {
      console.log("No Table Selected");
      return;
    }

    let restId = this.state.restaurant._id;
    let price = 0;
    this.state.orderedItems.map((item) => {
      price += item.price;
    });
    let ticket = {
      isPaid: false,
      amountCharged: price,
      amountPaid: 0,
      dateAdded: new Date(Date.now()),
      dateUpdated: new Date(Date.now())
    };
    console.log(tableIndex);

    API.updateTableBill(restId, tableIndex, ticket).then((result) => {
      console.log("Bill added to table no. " + this.state.activeTable);
      this.setState({
        orderedItems: []
      });
    });
  };

  billPaid = (tableIndex) => {
    let restId = this.state.restaurant._id;
    let receipt = {
      isPaid: true,
      amountCharged: 10,
      amountPaid: 15,
      dateAdded: new Date(Date.now()),
      dateUpdated: new Date(Date.now())
    }
    API.billPaid(restId, tableIndex, receipt).then((result) => {
      console.log(result);
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col size="sm-4">
            <OrderForm
              tables={this.state.tables}
              items={this.state.orderedItems}
              saveTicket={this.saveTicket}
              billPaid={this.billPaid}
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
