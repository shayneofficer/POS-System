import React from "react";
import ReservationRows from "./ReservationRows";
import API from "../utils/API";

const reservation = [
    {
        name: "Hannah",
        date: "1/30/19",
        time: "7:00pm",
        partySize: 5,
        tableAssignment: 3,
        server: "Patty"
    },
    {
        name: "Andrea",
        date: "1/31/19",
        time: "6:00pm",
        partySize: 2,
        tableAssignment: 4,
        server: "Nancy"
    }
];

class ReservationList extends React.Component {
    state = {
        reservations: []
    }

    componentDidMount() {
        const restID = sessionStorage.getItem("restID");
        // console.log("restID", restID)
        if (restID && typeof restID == "string") {
            // console.log("api call");
            API.getReservationsByRestaurant(restID).then(results => {
                // console.log("results.data", results.data);
                this.setState({ reservations: results.data });
            })
        }
    }
    render() {
        return (
            <div>
                <table>
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
                            <ReservationRows name={e.name} key={e._id}
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
                </table>
            </div>
        );
    }
};

export default ReservationList;
