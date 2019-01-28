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
    return axios.post("http://localhost:3001/api/&rest=", data);
  },
  getRestaurants: function (query) {
    console.log("Get Restaurants")
    return axios.get("http://localhost:3001/api/&rest=", query);
  },
  getRestaurantById: function (restId) {
    return axios.get(`http://localhost:3001/api/&rest=/${restId}`);
  },
  updateRestaurant: function (restId, data) {
    return axios.put(`http://localhost:3001/api/&rest=/${restId}`, data);
  },
  removeRestaurant: function (restId) {
    return axios.delete(`http://localhost:3001/api/&rest=/${restId}`);
  },

  /*************** Menu Methods *****************/
  createMenu: function (data) {
    return axios.post(`http://localhost:3001/api/menus`, data);
  },
  getMenus: function (query) {
    return axios.get(`http://localhost:3001/api/menus`, query);
  },
  getMenuById: function (menuId) {
    return axios.get(`http://localhost:3001/api/menus/&id=${menuId}`);
  },
  updateMenu: function (menuId, data) {
    return axios.put(`http://localhost:3001/api/menus/&id=${menuId}`, data);
  },
  removeMenu: function (menuId) {
    return axios.delete(`http://localhost:3001/api/menus/&id=${menuId}`);
  },

  /*************** Menu Item Methods *****************/

  createMenuItem: function (restId, menuId, data) {
    return axios.post(
      `http://localhost:3001/api/&rest=/${restId}/menus/&id=${menuId}/items`,
      data
    );
  },
  getMenuItems: function (restId, menuId, query) {
    return axios.get(
      `http://localhost:3001/api/&rest=/${restId}/menus/&id=${menuId}/items`,
      query
    );
  },
  getMenuItemsByCategory: function (restId, menuId, cat, query) {
    return axios.get(
      `http://localhost:3001/api/&rest=/${restId}/menus/&id=${menuId}/items/&cat=${cat}`,
      query
    );
  },
  getMenuItemById: function (restId, menuId, itemId) {
    return axios.get(
      `http://localhost:3001/api/&rest=/${restId}/menus/&id=${menuId}/items/&id=${itemId}`
    );
  },
  updateMenuItem: function (restId, menuId, itemId, data) {
    return axios.put(
      `http://localhost:3001/api/&rest=/${restId}/menus/&id=${menuId}/items/&id=${itemId}`,
      data
    );
  },
  removeMenuItem: function (restId, menuId, itemId) {
    return axios.delete(
      `http://localhost:3001/api/&rest=/${restId}/menus/&id=${menuId}/items/&id=${itemId}`
    );
  }
};
