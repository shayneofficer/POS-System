import React from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Reservations extends React.Component {
    state = {
        restaurantID: "",
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
            restaurantID: this.state.restaurantID,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            partySize: this.state.partySize
        };
        console.log("Res", submit);

        API.createReservation(submit)
            .then(res => {
                console.log("res", res);
                this.setState({ restaurantID: "", name: "", email: "", phone: "", partySize: "" });
                console.log(this.state);
            }).catch(err => console.log("err", err));
<<<<<<< HEAD

=======
      
>>>>>>> ecdf4b079748d24ab74298ba142af3635ca50eee
        console.log("handleFormSubmit");

        // API.getReservation().then(res => console.log("res", res)).catch(err => console.log("err", err));
    };
    render() {
        return (
            <div>
                <form>
                    <Input
                        onChange={this.handleInputChange}
                        name="restaurantID"
                        placeholder="Restaurant Name"
                        value={this.state.restaurantID}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="First &amp; Last Name"
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
                        placeholder="Phone"
                        value={this.state.phone}
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="partySize"
                        type="number"
                        placeholder="Party Size"
                        value={this.state.partySize}
                    />
                    <FormBtn onClick={this.handleFormSubmit}>
                        Create New Reservation
<<<<<<< HEAD
=======

>>>>>>> ecdf4b079748d24ab74298ba142af3635ca50eee
          </FormBtn>
                </form>
            </div>
        );
    }
}

export default Reservations;
