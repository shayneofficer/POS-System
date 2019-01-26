import React from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Reservations extends React.Component {
    state = {
        restaurantName: "",
        name: "",
        email: "",
        phone: "",
        partySize: ""
    }
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

        console.log("handleFormSubmit");
        const submit = {
            restaurantName: this.state.restaurantName,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            partySize: this.state.partySize
        };
        // console.log(submit);

        API.createReservation(submit)
            .then(res => {
                console.log("res", res);
                this.setState({ restaurantName: "", name: "", email: "", phone: "", partySize: "" });
                console.log(this.state);
            }).catch(err => console.log("err", err));

        // API.getReservation().then(res => console.log("res", res)).catch(err => console.log("err", err));
    };

    render() {
        return (
            <div>
                <form>
                    <Input
                        onChange={this.handleInputChange}
                        name="restaurantName"
                        placeholder="Restaurant Name"
                        value={this.state.restaurantName}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="First & Last Name"
                        value={this.state.name}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="phone"
                        type="number"
                        placeholder="phone"
                        value={this.state.phone}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="partySize"
                        type="number"
                        placeholder="partySize"
                        value={this.state.partySize}
                    />

                    <FormBtn onClick={this.handleFormSubmit}>
                        Create New Reservation
                    </FormBtn>
                </form>
            </div>
        );
    }
}

export default Reservations;
