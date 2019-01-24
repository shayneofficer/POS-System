import React from "react";
import "./tables.css";

class Table extends React.Component {
  // constructor(props) {
  // super(props);
  state = {
    tableReady: false,
    status: 0
  };
  // }

  changeStatus = () => {
    if (this.state.status === 6) {
      this.setState({ status: 0 });
    } else {
      const newTotal = this.state.status + 1;
      this.setState({ status: newTotal });
    }
  };

  render() {
    const myStlye = {
      table: {
        backgroundColor:
          // 0 = available
          this.state.status === 0
            ? "green"
            : // 1 = seated-have not ordered
            this.state.status === 1
            ? "yellow"
            : //2 = order has been taken
            this.state.status === 2
            ? "orange"
            : // 3 = food has been served
            this.state.status === 3
            ? "#32CD32"
            : // 4 = Needs Check
            this.state.status === 4
            ? "#00C5CD"
            : // 5 = needs bussing
            this.state.status === 5
            ? "#a50000"
            : this.state.status === 6
            ? "red"
            : "green",
        borderStyle: "solid",
        borderWidth: ".5rem",
        margin: "10px"
      }
    };

    return (
      <div style={{ display: "inline-flex" }} onClick={this.changeStatus}>
        <div
          style={myStlye.table}
          className={this.props.tableShape + " " + this.props.serverNumber}
        >
          {this.props.tableNumber}
        </div>
      </div>
    );
  }
}

export default Table;
