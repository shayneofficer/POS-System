import React from "react";
import Button from "react-bootstrap/Button";
import BillModal from "../components/BillModal";

import { Link } from "react-router-dom";
const myStyles = {
  buttons: {
    margin: "10px",
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center"
  }
};

class Order_Check_Btn extends React.Component {
  render() {
    let hidden = true;
    if (this.props.roleView === "manager" || this.props.roleView === "server") {
      hidden = false;
    }
    return (
      <div style={myStyles.buttons} className={`${hidden ? "d-none" : ""}`}>
        <Link to={`/order`}>
          <Button variant="warning" style={myStyles.buttons}>
            Enter Order
          </Button>
        </Link>

        <BillModal tables={this.props.tables} activeTable={this.props.activeTable}/>

      </div>
    );
  }
}

export default Order_Check_Btn;
