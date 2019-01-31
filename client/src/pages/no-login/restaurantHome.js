import React from "react";
import image from "../../Images/restbg.jpg";
import { FormBtn } from "../../components/Form";
import ShineMenu from "../no-login/PublicMenu/index.js";



const style = {
    buttons: {
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto"
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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center"
    }
};

const restID = sessionStorage.getItem("restID");
if (restID) {
    console.log("restID", restID);

} else {
    console.log("No restID");
}

class RestaurantHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = event => {
        event.preventDefault();
        window.location.href = "/Reservations"
    }

    render() {
        return (
            <div style={section.background}>
                <br />
                <h1 style={style.header}>Book your seat at Shine, our exclusive POS restaurant!</h1>
                <br />
                <br />

                <FormBtn onClick={this.handleSubmit} style={style.buttons}>
                    Make a Reservation
                </FormBtn>
                <ShineMenu />
                {/* <a href="/Reservations"><button
                    style={style.buttons}
                    type="button"
                    className="btn btn-warning">
                    Make a Reservation</button></a> */}

            </div >
        );
    }
}

export default RestaurantHome;
