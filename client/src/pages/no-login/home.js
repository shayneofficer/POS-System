import React from "react";
import Background from "../../Images/Picture1.jpg"



const style = {
    buttons: {
        marginLeft: "550px",
        fontSize: "1.3rem",
        display: "inline-flex",
        justifyContent: "center"
    },
    header: {
        color: "#ffc107",
        fontSize: "2.5rem",
        textAlign: "center"
    }
};

const section = {
    background: {
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Background})`
    }
};

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={section.background}>
                <br />
                <h1 style={style.header}>Book your seat at Shine, our exclusive POS restaurant!</h1>
                <br />
                <br />

                <a href="/Reservations"><button
                    style={style.buttons}
                    type="button"
                    className="btn btn-warning">
                    Make a Reservation</button></a>

            </div >
        );
    }
}

export default home;
