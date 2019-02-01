import React from "react";
import Button from "react-bootstrap/Button";

const myStyles = {
  buttons: {
    margin: "10px",
    fontSize: "1.3rem"
  }
};

class ReservationBtn extends React.Component {
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
