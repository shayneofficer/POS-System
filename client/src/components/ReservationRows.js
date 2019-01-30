import React, { Component } from "react";


class ReservationRows extends Component {

    render(props) {
        return (
            <tr>
                <tb>
                    {props.name}
                </tb>
                <tb>
                    {props.date}
                </tb>
                <tb>
                    {props.time}
                </tb>
                <tb>
                    {props.partySize}
                </tb>
            </tr>


        );
    }
}

export default ReservationRows;
