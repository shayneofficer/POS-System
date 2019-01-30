import React, { Component } from "react";


class ReservationRows extends Component {
    render() {
        console.log(this.props);
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.date}
                </td>
                <td>
                    {this.props.time}
                </td>
                <td>
                    {this.props.partySize}
                </td>
                <td>
                    {this.props.tableAssignment}
                </td>
                <td>
                    {this.props.server}
                </td>
            </tr>


        );
    }
}

export default ReservationRows;
