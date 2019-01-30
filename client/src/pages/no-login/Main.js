import React from "react";
import Background from "../../Images/Picture1.jpg"
import { Input, FormBtn } from "../../components/Form";
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

        const submit = {
            restaurantName: this.state.restaurantName,
        };
        console.log("handleFormSubmit", submit);

        API.findRestaurant(submit)
            .then(res => {
                console.log("res.data", res.data);
                this.setState({ restaurantName: "" });
                sessionStorage.setItem("restID", res.data._id);
                window.location.href = "./restaurantHome"
            }).catch(err => console.log("err", err));

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
                        name="restaurantName"
                        placeholder="Restaurant Name"
                        value={this.state.restaurantName}
                    /> <FormBtn onClick={this.handleFormSubmit}>
                        <a href="/restaurantHome"
                            style={style.buttons}
                            type="button"
                            className="btn btn-warning">
                            Search Restaurants</a>
                    </FormBtn>
                </form>

            </div >
        );
    }
}

export default Main;
