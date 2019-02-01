import React from "react";
import ReservationRows from "./ReservationRows";
import API from "../utils/API";
import Table from "react-bootstrap/Table";

class ReservationList extends React.Component {
  state = {
    reservations: []
  };

  componentDidMount() {
    const restID = sessionStorage.getItem("restID");
    // console.log("restID", restID)
    if (restID && typeof restID == "string") {
      // console.log("api call");
      API.getReservationsByRestaurant(restID).then(results => {
        // console.log("results.data", results.data);
        this.setState({ reservations: results.data });
      });
    }
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Party Size</th>
            <th>Table Assignment</th>
            <th>Server</th>
          </tr>
        </thead>
        <tbody>
          {this.state.reservations.map(e => (
            <ReservationRows
              name={e.name}
              key={e._id}
              email={e.email}
              phone={e.phone}
              date={e.date}
              time={e.time}
              partySize={e.partySize}
              tableAssignment={e.tableAssignment}
              server={e.server}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ReservationList;

//
