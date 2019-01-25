import axios from "axios";

export default {
  createUser: function (data) {
    console.log("createUser", data);
    return axios.post("http://localhost:3001/api/users", data);
  },
  userLogin: function (data) {
    console.log("userLogin", data);
    return axios.post("http://localhost:3001/api/users/login", data);
  },
  createReservation: function (data) {
    console.log("createReservation", data);
    return axios.post("http://localhost:3001/api/reservations", data);
  },
  getReservation: function () {
    console.log("getReservation");
    return axios.get("http://localhost:3001/api/reservations");
  },

  /*************** Restaurant Methods *****************/

  createRestaurant: function (data) {
    return axios.post("http://localhost:3001/api/restaurants", data);
  },
  getRestaurants: function (query) {
    console.log("Get Restaurants")
    return axios.get("http://localhost:3001/api/restaurants", query);
  },
  getRestaurantById: function (restId) {
    return axios.get(`http://localhost:3001/api/restaurants/${restId}`);
  },
  updateRestaurant: function (restId, data) {
    return axios.put(`http://localhost:3001/api/restaurants/${restId}`, data);
  },
  removeRestaurant: function (restId) {
    return axios.delete(`http://localhost:3001/api/restaurants/${restId}`);
  },

  /*************** Menu Methods *****************/
  createMenu: function (restId, data) {
    return axios.post(`http://localhost:3001/api/restaurants/${restId}/menus`, data);
  },
  getMenus: function (restId, query) {
    return axios.get(`http://localhost:3001/api/restaurants/${restId}/menus`, query);
  },
  getMenuById: function (restId, menuId) {
    return axios.get(`http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}`);
  },
  updateMenu: function (restId, menuId, data) {
    return axios.put(`http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}`, data);
  },
  removeMenu: function (restId, menuId) {
    return axios.delete(`http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}`);
  },

  /*************** Menu Item Methods *****************/

  createMenuItem: function (restId, menuId, data) {
    return axios.post(
      `http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}/items`,
      data
    );
  },
  getMenuItems: function (restId, menuId, query) {
    return axios.get(
      `http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}/items`,
      query
    );
  },
  getMenuItemsByCategory: function (restId, menuId, cat, query) {
    return axios.get(
      `http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}/items/&cat=${cat}`,
      query
    );
  },
  getMenuItemById: function (restId, menuId, itemId) {
    return axios.get(
      `http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}/items/&id=${itemId}`
    );
  },
  updateMenuItem: function (restId, menuId, itemId, data) {
    return axios.put(
      `http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}/items/&id=${itemId}`,
      data
    );
  },
  removeMenuItem: function (restId, menuId, itemId) {
    return axios.delete(
      `http://localhost:3001/api/restaurants/${restId}/menus/&id=${menuId}/items/&id=${itemId}`
    );
  }
};
