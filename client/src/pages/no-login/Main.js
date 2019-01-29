import React from "react";
import Background from "../../Images/Picture1.jpg"
import { Input, FormBtn } from "../../components/Search";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';

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
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center"
    }
};

class Main extends React.Component {
    state = {
        restaurantName: "",
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
        };
        API.getRestaurantById(submit)
            .then(res => {
                console.log("res", res);
                this.setState({ restaurantName: "" });
                return <Redirect to="/restaurantHome"></Redirect>
            }).catch(err => console.log("err", err));

        // API.getReservation().then(res => console.log("res", res)).catch(err => console.log("err", err));
    };
    render() {
        return (
            <div style={section.background}>
                <br />
                <h1 style={style.header}>Find your favorite exclusive restaurant!</h1>
                <br />
                <br />
                <form>
                    <Input
                        onChange={this.handleInputChange}
                        name="restaurantID"
                        placeholder="Restaurant Name"
                        value={this.state.restaurantID}
                    /> <FormBtn onClick={this.handleFormSubmit}>
                        <a href="/restaurantHome"
                            style={style.buttons}
                            type="button"
                            className="btn btn-warning">
                            Search Restaurants</a>
                    </FormBtn>
                </form>

                <a href="/restaurantHome"><button
                    style={style.buttons}
                    type="button"
                    className="btn btn-warning">
                    Search Restaurants</button></a>

            </div >
        );
    }
}

export default Main;
