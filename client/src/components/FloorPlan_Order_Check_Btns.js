import React from "react";
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
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    let hidden = true;
    if (this.props.roleView === "manager" || this.props.roleView === "server") {
      hidden = false;
    }
    return (
      <div style={myStyles.buttons} className={`${hidden ? "d-none" : ""}`}>
        <Link to={`/order`}>
          <button
            style={myStyles.buttons}
            type="button"
            className="btn btn-warning"
          >
            Enter Order
          </button>
        </Link>
        <Link to={`/home`}>
          <button
            style={myStyles.buttons}
            type="button"
            className="btn btn-warning"
          >
            Get Check
          </button>
        </Link>
      </div>
    );
  }
}

export default Order_Check_Btn;
