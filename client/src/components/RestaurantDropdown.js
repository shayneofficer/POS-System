import React from "react";
import API from "../utils/API";

// Dropdown Selection with all of the restaurant names in current database
class RestaurantDropdown extends React.Component {
  state = {
    selections: []
  }

  componentDidMount() {
    API.findRestaurantsJustNames().then(results => {
      console.log("selections.data", results.data);
      this.setState({ selections: results.data });
    })
  }

  render() {
    return (
      <div>
        <div class="form-group">
          <label for="restaurantNames">Restaurant Select</label>
          <select onChange={this.props.selectionChange} class="form-control" id="restaurantNames">
            <option>-</option>
            {this.state.selections.map(e => (
              <option key={e._id} _id={e._id}>{e.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
};

export default RestaurantDropdown;
