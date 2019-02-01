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
  state = {
    hidden: "d-none"
  };
  componentDidMount() {
    if (this.props.roleView === "manager" || this.props.roleView === "server") {
      this.setState({
        hidden: ""
      });
    } else {
      this.setState({
        hidden: "d-none"
      });
    }
    // console.log(this.props.roleView);
    // console.log("hidden:",this.state.hidden);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.roleView !== this.props.roleView) {
      if (
        this.props.roleView === "manager" ||
        this.props.roleView === "server"
      ) {
        this.setState({
          hidden: ""
        });
      } else {
        this.setState({
          hidden: "d-none"
        });
      }
      console.log(this.state.hidden);
    }
  }

  render() {
    return (
      <div style={myStyles.buttons} className={this.state.hidden}>
        <Link to={`/order`}>
          <Button variant="warning" style={myStyles.buttons}>
            Enter Order
          </Button>
        </Link>

        <BillModal
          tables={this.props.tables}
          activeTable={this.props.activeTable}
        />
      </div>
    );
  }
}

export default Order_Check_Btn;
