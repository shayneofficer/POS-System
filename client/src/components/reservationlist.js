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

const getReservations = restID => {
    console.log("restID", restID)
    if (restID && typeof restID == "string") {
        console.log("api call")
        API.getReservationsByRestaurant(restID).then(results => {
            console.log("results.data", results.data);

        })
    }
}


class ReservationList extends React.Component {
    state = {
        reservations: []
    }

    componentDidMount() {
        const restID = sessionStorage.getItem("restID");
        console.log("restID", restID)
        if (restID && typeof restID == "string") {
            console.log("api call")
            API.getReservationsByRestaurant(restID).then(results => {
                console.log("results.data", results.data);
                this.setState({reservations: results.data});
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
                                date={e.date}
                                time={e.time}
                                partySize={e.partySize}
                                tableAssignment={e.tableAssignment}
                                server={e.server}
                            />
                        ))}
                        {/* <ReservationRows name={reservation.res1.name}
                        date={reservation.res1.date}
                        time={reservation.res1.time}
                        partySize={reservation.res1.partySize}
                        tableAssignment={reservation.res1.tableAssignment}
                        server={reservation.res1.server} />
                    <ReservationRows name={reservation.res2.name}
                        date={reservation.res2.date}
                        time={reservation.res2.time}
                        partySize={reservation.res2.partySize}
                        tableAssignment={reservation.res2.tableAssignment}
                        server={reservation.res2.server} /> */}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ReservationList;
