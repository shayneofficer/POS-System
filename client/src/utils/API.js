import axios from "axios";

export default {
  createRestaurant: function (data) {
    return axios.post("/api/restaurants", data);
  },
  getRestaurants: function () {
    return axios.get("/api/restaurants");
  },
  createUser: function (data) {
    console.log("createUser", data);
    return axios.post("/api/users", data);
  },
  userLogin: function (data) {
    console.log("userLogin", data);
    return axios.post("/api/users/login", data);
  },
  createReservation: function (data) {
    console.log("createReservation", data);
    return axios.post("/api/reservations")
  }
};
