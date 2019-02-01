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
    hidden: true
  }
  componentDidMount() {
    if (this.props.roleView === "manager" || this.props.roleView === "server") {
      this.setState({
        hidden: false
      })
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.roleView !== prevProps.roleView) {
      console.log(this.props.roleView);
    }
  }

  render() {
    let hide = ""
    this.state.hidden ? hide = "d-none" : hide = "";
    return (
      <div style={myStyles.buttons} className={hide}>
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
