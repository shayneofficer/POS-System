import React from "react";
import Background from "../../Images/homebg.jpg";
import { FormBtn } from "../../components/Form";

import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { ReadStream } from "tty";

const style = {
  buttons: {
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto"
  },
  header: {
    marginTop: "2%",
    color: "white",
    fontSize: "2.5rem",
    textAlign: "center"
  },
  restselect: {
    color: "white",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto"
  },
  entry: {
    width: "75%",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto"
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
    selections: []
  };

  componentDidMount() {
    API.findRestaurantsJustNames().then(results => {
      //   console.log("selections.data", results.data);
      this.setState({ selections: results.data });
    });
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // console.log(`${name}: ${value}`);
  };

  selectionChange = (event) => {
    // console.log(event.target.value);
    this.setState({ restaurantName: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const submit = {
      restaurantName: this.state.restaurantName
    };
    console.log("handleFormSubmit", submit);

    API.findRestaurant(submit)
      .then(res => {
        // console.log("res.data", res.data);
        if (res.data == null) {
          this.setState({
            restaurantName: `"${this.state
              .restaurantName}" is not a current restaurant`
          });
        } else {
          this.setState({ restaurantName: "" });
          sessionStorage.setItem("restID", res.data._id);
          window.location.href = "./restaurantHome";
        }
      })
      .catch((err) => console.log("err", err));
  };
  render() {
    return (
      <div style={section.background}>
        <br />
        <h1 style={style.header}>Browse our exclusive restaurants!</h1>
        <br />
        <br />
        <form>
          <div className="form-group">
            <label style={style.restselect} htmlFor="restaurantNames">
              Restaurant Select
            </label>
            <select style={style.entry}
              onChange={this.selectionChange}
              className="form-control"
              id="restaurantNames">
              <option>-</option>
              {this.state.selections.map((e) => (
                <option key={e._id} _id={e._id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <FormBtn onClick={this.handleFormSubmit} style={style.buttons}>
            {/* <a href="/restaurantHome"
                            style={style.buttons}
                            type="button"
                            className="btn btn-warning"> */}
            Select Restaurant
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default Main;
