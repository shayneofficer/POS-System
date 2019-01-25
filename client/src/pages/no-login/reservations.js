import React from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Reservations extends React.Component {
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(`${name}: ${value}`);
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
        console.log(submit);

        API.createReservation(submit)
            .then(res => {
                console.log("res", res);
                this.setState({ restaurantName: "", name: "", email: "", phone: "", partySize: "" });
                console.log(this.state);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form>
                    <Input
                        onChange={this.handleInputChange}
                        restaurantName="Shine"
                        placeholder="Shine"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="TeamGroupSquad"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        e-mail="email"
                        placeholder="Email"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        phone="012345678"
                        placeholder="012345678"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        partySize="#"
                        placeholder="5"
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
