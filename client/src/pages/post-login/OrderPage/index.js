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
    this.showItems();
  };

  getMenu = () => {
    this.getRestaurant((result) => {
      const Restaurant = result;
      const Menu = Restaurant.Menus[0];
      const Categories = Menu.Categories;
      let tableArr = [];
      Restaurant.Tables.map((table, i) => {
        tableArr.push(table);
      });
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
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  showItems = () => {
    this.getMenu();
  };

  addItem = (item) => {
    let array = this.state.orderedItems;
    array.push(item);
    this.setState({
      orderedItems: array
    });
  };

  removeItem = (index) => {
    let array = this.state.orderedItems;
    array.splice(index, 1);
    this.setState({
      orderedItems: array
    });
  };

  getTickets = (e) => {
    e.preventDefault();
    // let tickets = this.state.restaurant.Receipts;
  };

  saveTicket = (tableIndex, newBill) => {
    if (tableIndex < 0) {
      console.log("No Table Selected");
      return;
    }

    let restId = this.state.restaurant._id;

    API.updateTableBill(restId, tableIndex, newBill).then((result) => {
      this.setState({
        // tables: result.data.Tables,
        orderedItems: []
      });
    });
  };

  billPaid = (tableIndex, receipt) => {
    let restId = this.state.restaurant._id;
    API.billPaid(restId, tableIndex, receipt).then((result) => {
      this.setState({
        orderedItems: []
      });
    });
  };

  newBill = (tableIndex, newBill) => {
    let restId = this.state.restaurant._id;
    API.archiveBill(restId, tableIndex, newBill);
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      console.log(restaurant);
      this.setState({
        tables: restaurant.Tables
      });
    });
  };

  createItem = (catIndex, itemName, itemPrice) => {
    const newPrice = parseFloat(itemPrice);
    if (newPrice) {
      const newItem = {
        name: itemName,
        price: itemPrice,
        date: new Date(Date.now())
      };
      API.addMenuItem(
        this.state.restaurant._id,
        catIndex,
        newItem
      ).then((result) => {
        if (result.data) {
          this.setState({
            categories: result.data
          });
        } else {
          console.log(
            "Weird Exception: See createCategory() of OrderPage/index.js",
            result
          );
        }
      });
    }
  };

  createCategory = (catName) => {
    if (catName) {
      const newCat = {
        name: catName,
        items: [],
        date: new Date(Date.now())
      };
      API.addMenuCategory(this.state.restaurant._id, newCat).then((result) => {
        if (result.data) {
          this.setState({
            categories: result.data
          });
          console.log(result.data)
        } else {
          console.log(
            "Weird Exception: See createCategory() of OrderPage/index.js",
            result
          );
        }
      });
    }
  };

  render () {
    return (
      <Container>
        <Row>
          <Col size="sm-4">
            <div className="box">
              <OrderForm
                tables={this.state.tables}
                saveTicket={this.saveTicket}
                billPaid={this.billPaid}
                removeItem={this.removeItem}
                orderedItems={this.state.orderedItems}
                newBill={this.newBill}
              />
            </div>
          </Col>
          <Col size="sm-8">
            <div className="box">
              <Menu
                tables={this.state.tables}
                categories={this.state.categories}
                orderItem={this.addItem}
                canEdit={true}
                canOrder={true}
                createCategory={this.createCategory}
                createItem={this.createItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default OrderPage;
