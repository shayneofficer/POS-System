import React from "react";
import MenuCats from "../../components/MenuCats";
import API from "../../utils/API";

// import { Row, Col } from "../../components/Grid";

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
    // tableNo: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12"],
    // items: [],
    // menu: {}
  };
  componentDidMount = () => {
    this.getMenu();
  };
  getMenu = () => {
    API.getMenus({ name: "Shine Main Menu" }).then((result) => {
      this.setState({
        menu: result.data[0],
        items: result.data[0].items
      });
    });
  };

  // getItems = (menuId) => {
  //   API.getMenuById(menuId).then((result) => {
  //     this.setState({ items: result.data.items });
  //     console.log(result);
  //     console.log("hey shit face")
  //     alert("helllooooo")
  //   });
  // };

  showItems = () => {
    // alert("YO LOOK AT THESE DISHES");
    console.log("AM I WORKING ");
    alert("hi");
   
  };


  // showItems = (menuId) => {
  //   API.getMenuById(menuId).then((result) => {
  //     this.setState({ items: result.data.items });
  //     console.log(result);
  //     console.log("hey shit face")
  //   });
  // };

  render() {
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
                    {/* <h1>{this.state.items.length}</h1> */}
                  </tr>
                </table>
                <input className="btn btn-warning" type="submit" />
              </div>
            </form>

          </div>
          <div className="column" style={colSize.column}>

            {this.state.category.map((category) => {
              return (<MenuCats category={category} showItems={this.showItems} />)
            })}

          </div>


          <hr />
        </div>
      </div>
    );
  }
}

export default Order;
