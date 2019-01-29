import React from "react";
import ReservationRows from "../../components/ReservationRows";

const reservation = {
    res1: {
        name: "Hannah",
        date: Date.now,
        time: 7,
        partySize: 5
        // HOST INPUT FOR TABLE #    }
    },
    // res2:
}

class ReservationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Party Size</th>
                    </tr>
                    {/* COMPONENT THAT HAS PROPERTIES THAT TAKES NAME, DATE, NAME, PARTY SIZE AND USES IT TO CREATE */}
                    <ReservationRows name={reservation.res1.name}
                        date={reservation.res1.date}
                        time={reservation.res1.time}
                        partySize={reservation.res1.partySize} />
                </table>
                {reservation.res1}
                {reservation.res2}
            </div>
        );
    }
}

export default ReservationList;
