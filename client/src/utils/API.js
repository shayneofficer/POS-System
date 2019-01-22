import axios from "axios";

export default {
  // Creates a restaurant to the database
  createRestaurant: function(data) {
    return axios.post("/api/restaurants", data);
  },
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  }
};
