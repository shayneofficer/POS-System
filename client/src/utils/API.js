import axios from "axios";

export default {
  createRestaurant: function(data) {
    return axios.post("/api/restaurants", data);
  },
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  createUser: function(data) {
    console.log("createUser", data);
    return axios.post("/api/users", data);
  },
  getMenusByRestaurant: function(restId, data) {
    return axios.post(`/api/restaurants/${restId}/menus`, data)
  }
};
