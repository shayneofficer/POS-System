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
    activeTable: {}
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

  addItem= (item) => {
    let array = this.state.orderedItems;
    array.push(item);
    this.setState({
      orderedItems: array
    });
  };

  removeItem= (index) => {
    let array = this.state.orderedItems;
    array.splice(index, 1);
    this.setState({
      orderedItems: array
    });
  }

  getTickets = (e) => {
    e.preventDefault();
    let tickets = this.state.restaurant.Receipts;
    console.log(tickets);
  };

  saveTicket = (e, tableIndex, newBill) => {
    e.preventDefault();
    if (tableIndex < 0) {
      console.log("No Table Selected");
      return;
    }

    let restId = this.state.restaurant._id;
    
    console.log(newBill);

    API.updateTableBill(restId, tableIndex, newBill).then((result) => {
      this.setState({
        // tables: result.data.Tables,
        orderedItems: []
      })
    })
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
      this.setState({
        orderedItems: []
      });
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col size="sm-4">
            <OrderForm
              tables={this.state.tables}
              activeTable={this.state.activeTable}
              saveTicket={this.saveTicket}
              billPaid={this.billPaid}
              removeItem={this.removeItem}
              orderedItems={this.state.orderedItems}
            />
          </Col>
          <Col size="sm-8">
            <div className="box">
              <Menu
                tables={this.state.tables}
                categories={this.state.categories}
                orderItem={this.addItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default OrderPage;
