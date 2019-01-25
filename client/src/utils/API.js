import axios from "axios";

export default {
  /*************** User Login Methods *****************/

  createUser: function (data) {
    console.log("createUser", data);
    return axios.post("/api/users", data);
  },
  userLogin: function (data) {
    console.log("userLogin", data);
    return axios.post("/api/users/login", data);
  },

  /*************** Restaurant Methods *****************/

  createRestaurant: function (data) {
    return axios.post("/api/restaurants", data);
  },
  getRestaurants: function (query) {
    return axios.get("/api/restaurants", query);
  },
  getRestaurantById: function (restId) {
    return axios.get(`/api/restaurants/${restId}`);
  },
  updateRestaurant: function (restId, data) {
    return axios.put(`/api/restaurants/${restId}`, data);
  },
  removeRestaurant: function (restId) {
    return axios.delete(`/api/restaurants/${restId}`);
  },

  /*************** Menu Methods *****************/
  createMenu: function (restId, data) {
    return axios.post(`/api/restaurants/${restId}/menus`, data);
  },
  getMenus: function (restId, query) {
    return axios.get(`/api/restaurants/${restId}/menus`, query);
  },
  getMenuById: function (restId, menuId) {
    return axios.get(`/api/restaurants/${restId}/menus/&id=${menuId}`);
  },
  updateMenu: function (restId, menuId, data) {
    return axios.put(`/api/restaurants/${restId}/menus/&id=${menuId}`, data);
  },
  removeMenu: function (restId, menuId) {
    return axios.delete(`/api/restaurants/${restId}/menus/&id=${menuId}`);
  },

  /*************** Menu Item Methods *****************/

  createMenuItem: function (restId, menuId, data) {
    return axios.post(
      `/api/restaurants/${restId}/menus/&id=${menuId}/items`,
      data
    );
  },
  getMenuItems: function (restId, menuId, query) {
    return axios.get(
      `/api/restaurants/${restId}/menus/&id=${menuId}/items`,
      query
    );
  },
  getMenuItemsByCategory: function (restId, menuId, cat, query) {
    return axios.get(
      `/api/restaurants/${restId}/menus/&id=${menuId}/items/&cat=${cat}`,
      query
    );
  },
  getMenuItemById: function (restId, menuId, itemId) {
    return axios.get(
      `/api/restaurants/${restId}/menus/&id=${menuId}/items/&id=${itemId}`
    );
  },
  updateMenuItem: function (restId, menuId, itemId, data) {
    return axios.put(
      `/api/restaurants/${restId}/menus/&id=${menuId}/items/&id=${itemId}`,
      data
    );
  },
  removeMenuItem: function (restId, menuId, itemId) {
    return axios.delete(
      `/api/restaurants/${restId}/menus/&id=${menuId}/items/&id=${itemId}`
    );
  }
};
