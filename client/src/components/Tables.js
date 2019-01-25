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
            ? "#00A82E"
            : this.state.status === 1
            ? "yellow"
            : this.state.status === 2
            ? "orange"
            : this.state.status === 3
            ? "#cc00cc"
            : this.state.status === 4
            ? "#00C5CD"
            : this.state.status === 5
            ? "red"
            : "#00A82E",
        borderStyle: "solid",
        borderWidth: ".5rem",
        margin: "10px"
      }
    }; // 1 = seated-have not ordered //2 = order has been taken // 3 = food has been served // 4 = Needs Check // 5 = needs bussing

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
