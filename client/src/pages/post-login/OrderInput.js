import React from "react";
import MenuCats from "../../components/MenuCats";
import API from "../../utils/API";
import Menu from "../../components/Menu/index.jsx";

import { Row, Col } from "react-bootstrap";

class Order extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  state = {
    category: [
      "Cold Apps",
      "Hot Apps",
      "Noodles & Rice",
      "Chef's Special Rolls",
      "House Specials"
    ],
    tableNo: [ "1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12" ],
    restaurant: {},
    categories: []
  };

  componentDidMount = () => {
    this.showItems();
  };

  getMenu = () => {
    this.getRestaurant((result) => {
      const Restaurant = result.data[0];
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
    const colSize = {
      row: {
        display: "flex"
      },

      column: {
        flex: "50%"
      },

      ticket: {
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: "5px",
        marginLeft: "30px",
        marginTop: "30px",
        width: "500px",
        height: "800px"
      },
      td: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey",
        textAlign: "left",
        padding: "10px"
      },

      th: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey",
        textAlign: "left",
        padding: "10px"
      },

      catbtn: {
        width: "150px",
        display: "inline-block",
        textAlign: "center",
        paddingRight: "10px",
        paddingLeft: "10px",
        marginLeft: "5px",
        marginTop: "5px"
      }
    };

    return (
      <div>
        <div className="row" style={colSize.row}>
          <div className="column" style={colSize.column}>
            <form>
              Order for :
              <select name="table-no">
                <option value="table1">Table 1</option>
                <option value="table2">Table 2</option>
                <option value="table3">Table 3</option>
                <option value="table4">Table 4</option>
                <option value="table5">Table 5</option>
                <option value="table6">Table 6</option>
                <option value="table7">Table 7</option>
                <option value="table8">Table 8</option>
                <option value="table9">Table 9</option>
                <option value="table10">Table 10</option>
                <option value="table11">Table 11</option>
                <option value="table12">Table 12</option>
              </select>
              <div style={colSize.ticket} className="orderList">
                <table>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>$</th>
                  </tr>
                  <tr>
                    <td>sdfsdfsd</td>
                    <td>sdfsdf</td>
                    <td>sdfdfsdf</td>
                  </tr>
                  <tr>
                    <td>qweqwe</td>
                    <td>qweqwe</td>
                    <td>qweqwe</td>
                  </tr>
                </table>
                <input className="btn btn-warning" type="submit" />
              </div>
            </form>
          </div>
          <div className="column" style={colSize.column}>
            <Menu categories={this.state.categories} />
          </div>

          <hr />
        </div>
      </div>
    );
  }
}

export default Order;
