import axios from "axios";
const base = `http://localhost:3001/api/`;

export default {
  createUser: function (data) {
    console.log(`createUser`, data);
    return axios.post(`${base}users`, data);
  },
  userLogin: function (data) {
    console.log("userLogin", data);
    return axios.post(`${base}users/login`, data);
  },
  createReservation: function (restId, data) {
    console.log(`createReservation`, data);
    return axios.post(`${base}&rest=${restId}/&reservations`, data);
  },
  getReservations: function (restId) {
    return axios.get(`${base}&rest=${restId}/&reservations`);
  },
  /*************** Restaurant Methods *****************/

  createRestaurant: function (data) {
    return axios.post(`${base}&rest`, data);
  },
  getRestaurants: function (query) {
    return axios.get(`${base}&rest`, query);
  },
  getRestaurantById: function (restId) {
    return axios.get(`${base}&rest=${restId}`);
  },
  updateRestaurant: function (restId, data) {
    return axios.put(`${base}&rest=${restId}`, data);
  },
  removeRestaurant: function (restId) {
    return axios.delete(`${base}&rest=${restId}`);
  },

  /*************** Menu Methods *****************/

  createMenu: function (restId, data) {
    return axios.post(`${base}&rest=${restId}/&menus/`, data);
  },
  getMenus: function (restId) {
    return axios.get(`${base}&rest=${restId}/&menus/`);
  },
  getMenuById: function (restId, menuId) {
    return axios.get(`${base}&rest=${restId}/&menus=${menuId}`);
  },
  updateMenu: function (restId, menuId, data) {
    return axios.put(`${base}&rest=${restId}/&menus=${menuId}`, data);
  },
  removeMenu: function (restId, menuId) {
    return axios.delete(`${base}&rest=${restId}/&menus=${menuId}`);
  },

  /*************** Menu Item Methods *****************/

  createCategory: function (restId, menuId, data) {
    return axios.post(`${base}&rest=${restId}/&menus=${menuId}`, data);
  },
  getCategories: function (restId, menuId) {
    return axios.get(`${base}&rest=${restId}/&menus=${menuId}/&cat/`);
  },
  getCategoryById: function (restId, menuId, catId) {
    return axios.get(`${base}&rest=${restId}/&menus=${menuId}/&cat=${catId}`);
  },
  updateCategory: function (restId, menuId, catId, data) {
    return axios.put(`${base}&rest=${restId}/&menus=${menuId}/&cat=${catId}`, data)
  },
  removeCategory: function (restId, menuId, catId) {
    return axios.delete(`${base}&rest=${restId}/&menus=${menuId}/&cat=${catId}`)
  },
  createMenuItem: function (restId, menuId, catId, data) {
    return axios.post(`${base}$rest=${restId}/&menus=${menuId}/&cat=${catId}/&items/`, data);
  },
  getMenuItemsByCat: function (restId, menuId, catId) {
    return axios.get(
      `${base}&rest=${restId}/&menus=${menuId}/&cat=${catId}/&items/`
    );
  },
  updateMenuItem: function (restId, menuId, catId, itemId, data) {
    return axios.put(
      `${base}&rest=${restId}/&menus=${menuId}/&cat=${catId}/&items=${itemId}`,
      data
    );
  },
  removeMenuItem: function (restId, menuId, catId, itemId) {
    return axios.delete(
      `${base}&rest=${restId}/&menus=${menuId}/&cat=${catId}/&items=${itemId}`
    );
  }
};
