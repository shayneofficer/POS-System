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

class ReservationBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let hidden = true;
    if (this.props.roleView === "host" || this.props.roleView === "manager") {
      hidden = false;
    }
    return (
      <div style={myStyles.buttons} className={`${hidden ? "d-none" : ""}`}>
        <Link to={`/home`}>
          <button
            style={myStyles.buttons}
            type="button"
            className="btn btn-warning"
          >
            See Reservations
          </button>
        </Link>
      </div>
    );
  }
}

export default ReservationBtn;
