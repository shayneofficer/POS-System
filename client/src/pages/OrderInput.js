import React from 'react';
import MenuCats from "../components/MenuCats";


class Order extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  state = {
    category: ["Appetizers", "Entrees", "Sushi", "Etc"],
    tableNo: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12"]
  };


  render() {

    const colSize = {
      row: {
        display: "flex",
      },

      column: {
        flex: "50%",

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
        padding: "10px",

      },

      th: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey",
        textAlign: "left",
        padding: "10px",
      }
    }
    return (
      <div>
        <div className="row" style={colSize.row}>
          <div className="column" style={colSize.column}>
            <form >
              Order for Table:
                            <select name="table-no">

                <option value="table1">1</option>
                <option value="table2">2</option>
                <option value="table3">3</option>
                <option value="table4">4</option>
              </select>
              <div style={colSize.ticket} className="orderList">
                <h2>Check No. :</h2>
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
                <input type="submit" />
              </div>

            </form>

          </div>
          <div className="column" style={colSize.column}>
            {this.state.category.map((category) => {
              return (<MenuCats category={category} />)
            })}
          </div>
          <hr />


        </div>
      </div>
    );
  }
}

export default Order;