import React from "react";
import Background from "../../Images/Picture1.jpg"



const style = {
    buttons: {
        marginLeft: "450px",
        fontSize: "1.3rem",
        display: "flex",
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
        height: "700px",
        background: "cover",
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
                <h1 style={style.header}>Webster Halsted</h1>
                <h2 style={style.header}>Book your seat at Shine, our exclusive POS restaurant!</h2>
                <br />

                <a href="/Reservations"><button
                    style={style.buttons}
                    type="button"
                    className="btn btn-warning">
                    Reservation</button></a>


                <footer className="footer">
                    {/* <div className="container">
                        <p><a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
                    </div> */}
                </footer>
            </div >
        );
    }
}

export default home;
