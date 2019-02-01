import React from "react";
import ReservationRows from "./ReservationRows";
import API from "../utils/API";
import Table from "react-bootstrap/Table";

class ReservationList extends React.Component {
  state = {
    reservations: []
  };

  componentDidMount () {
    const restID = sessionStorage.getItem("restID");
    this.getRestaurant((result) => {
      const reservations = result.Reservations
      this.setState({
        reservations: reservations
      });
    });
    // }
  } 
  getRestaurant = (callback) => {
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  render () {
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
          {this.state.reservations.map((e) => (
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
