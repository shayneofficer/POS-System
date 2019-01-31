import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const myStyles = {
  buttons: {
    margin: "10px",
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center"
  }
};

class ReservationBtn extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     reservation: this.props.seeReservations
  //   };
  // }

  // changeReservation = () => {
  //   this.setState({ reservation: true });
  //   console.log(this.state.reservation);
  // };
  render() {
    let hidden = true;
    if (this.props.roleView === "host" || this.props.roleView === "manager") {
      hidden = false;
    }
    return (
      <div style={myStyles.buttons} className={`${hidden ? "d-none" : ""}`}>
        <Button
          variant="warning"
          style={myStyles.buttons}
          onClick={this.props.changeReservations}
        >
          See Reservations
        </Button>
      </div>
    );
  }
}

export default ReservationBtn;
