import React from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { distanceInWordsToNow } from "date-fns";

const style = {
    input: {
        width: "50%",
        fontSize: "1.3rem",
        display: "in-line",
        justifyContent: "center",
        margin: "0 auto"
    },
    background: {
        backgroundColor: "lightgray"
    },
    button: {
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto"
    }
};

class Reservations extends React.Component {
    state = {
        restaurantID: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: ""
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // console.log(`${name}: ${value}`);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (event) {
            alert("Yay! You are officially booked!");
        }
        else {
            alert("Sorry you are on the wait list");
        }
        console.log("handleFormSubmit");
        const submit = {
            restaurantID: this.state.restaurantID,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            date: this.state.date,
            time: this.state.time,
            partySize: this.state.partySize
        };
        console.log("Res", submit);

        API.createReservation(submit)
            .then(res => {
                console.log("res", res);
                this.setState({ restaurantID: "", name: "", email: "", phone: "", date: "", time: "", partySize: "" });
                // console.log(this.state);
            })
            .catch(err => console.log("err", err));

        console.log("handleFormSubmit");

        // API.getReservation().then(res => console.log("res", res)).catch(err => console.log("err", err));
    };

    render() {
        const restID = sessionStorage.getItem("restID");

        if (restID && typeof restID == "string") {
            this.state.restaurantID = restID;
        };

        return (
            <div style={style.background}>
                <form style={style.input}>
                    Restaurant ID
                    <Input
                        onChange={this.handleInputChange}
                        name="restaurantID"
                        placeholder="Restaurant Name"
                        value={this.state.restaurantID}
                    />
                    Name
                    <Input
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="First &amp; Last Name"
                        value={this.state.name}
                    />
                    E-mail
                    <Input
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                    />
                    Phone
                    <Input
                        onChange={this.handleInputChange}
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        value={this.state.phone}
                    />
                    Date
                    <Input
                        onChange={this.handleInputChange}
                        name="date"
                        type="date"
                        min={Date.now}
                        value={this.state.date}
                    />
                    Time
                    <Input
                        onChange={this.handleInputChange}
                        name="time"
                        type="time"
                        min="10:00"
                        max="20:00"
                        step="900"
                        value={this.state.time}
                    />
                    Party-Size
                    <Input
                        onChange={this.handleInputChange}
                        name="partySize"
                        type="number"
                        placeholder="Party Size"
                        value={this.state.partySize}
                    />
                    <FormBtn onClick={this.handleFormSubmit} style={style.button}>
                        Create New Reservation
          </FormBtn>

                </form>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Reservations;
