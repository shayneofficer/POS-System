import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

class ReservationRows extends Component {
    updateReservation = event => {
        event.preventDefault();
        console.log("e.t.v", event.target.value);
    };

    render() {
        console.log("RR props", this.props);
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.date}</td>
                <td>{this.props.time}</td>
                <td>{this.props.partySize}</td>
                <td>
                    <form>
                        <input type="number" />
                        <Button type="submit" onClick={this.updateReservation} variant="warning">
                            Submit
                        </Button>
                    </form>
                </td>
                <td>
                    <form>
                        <input type="name" />
                        <Button type="submit" onClick={this.updateReservation} variant="warning">
                            Submit
                        </Button>
                    </form>
                </td>
            </tr>
        );
    }
}

export default ReservationRows;
