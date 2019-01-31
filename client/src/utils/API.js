import axios from "axios";
const base = "/api/";

export default {
  createUser: function(data) {
    console.log(`createUser`, data);
    return axios.post(`${base}users`, data);
  },
  userLogin: function(data) {
    console.log("userLogin", data);
    return axios.post(`${base}users/login`, data);
  },
  createReservation: function(data) {
    console.log(`createReservation`, data);
    return axios.post(`${base}reservations`, data);
  },
  getReservations: function() {
    return axios.get(`${base}reservations`);
  },
  updateReservations: function(id, data) {
    return axios.put(`${base}reservations/${id}`, data);
  },
  getReservationsByRestaurant: function(restID) {
    return axios.get(`${base}reservations/rest/${restID}`);
  },
  /*************** Restaurant Methods *****************/

  createRestaurant: function(data) {
    return axios.post(`${base}&rest/`, data);
  },
  getRestaurants: function() {
    return axios.get(`${base}&rest/`);
  },
  findRestaurant: function(data) {
    return axios.post(`${base}&rest/name`, data);
  },
  findRestaurantsJustNames: function() {
    return axios.get(`${base}&rest/justNames`);
  },
  getRestaurantById: function(restId) {
    return axios.get(`${base}&rest/=${restId}`);
  },
  updateRestaurant: function(restId, data) {
    console.log("reached API");
    return axios.put(`${base}&rest/=${restId}`, data);
  },
  removeRestaurant: function(restId) {
    return axios.delete(`${base}&rest/=${restId}`);
  },

  updateTableBill: function(restId, tableIndex, ticket) {
    console.log(restId, tableIndex);
    let data = { Bill: ticket };
    return axios.put(`${base}&rest/=${restId}/&tables/=${tableIndex}`, data);
  },
  billPaid: function(restId, tableIndex, receipt) {
    console.log(restId, tableIndex, receipt);
    return axios.put(
      `${base}&rest/=${restId}/&tables/=${tableIndex}/paid`,
      receipt
    );
  },
  archiveBill: function(restId, tableIndex, newBill) {
    console.log("********");
    console.log(newBill);
    console.log("********");
    return axios.put(
      `${base}&rest/=${restId}/&tables/=${tableIndex}/archive`,
      newBill
    );
  },

  /*************** Menu Methods *****************/

  createMenu: function(restId, data) {
    return axios.post(`${base}&rest/=${restId}/&menus/`, data);
  },
  getMenus: function(restId) {
    console.log(restId);
    return axios.get(`${base}&rest/=${restId}/&menus/`);
  },
  getMenuById: function(restId, menuId) {
    return axios.get(`${base}&rest/=${restId}/&menus=${menuId}`);
  },
  updateMenu: function(restId, menuId, data) {
    return axios.put(`${base}&rest/=${restId}/&menus=${menuId}`, data);
  },
  removeMenu: function(restId, menuId) {
    return axios.delete(`${base}&rest/=${restId}/&menus=${menuId}`);
  },

  /*************** Menu Item Methods *****************/

  createCategory: function(restId, menuId, data) {
    return axios.post(`${base}&rest/=${restId}/&menus=${menuId}`, data);
  },
  getCategories: function(restId, menuId) {
    console.log(restId, menuId);
    return axios.get(`${base}&rest/=${restId}/&menus=${menuId}/&cat/`);
  },
  getCategoryById: function(restId, menuId, catId) {
    return axios.get(`${base}&rest/=${restId}/&menus=${menuId}/&cat=${catId}`);
  },
  updateCategory: function(restId, menuId, catId, data) {
    return axios.put(
      `${base}&rest/=${restId}/&menus=${menuId}/&cat=${catId}`,
      data
    );
  },
  removeCategory: function(restId, menuId, catId) {
    return axios.delete(
      `${base}&rest/=${restId}/&menus=${menuId}/&cat=${catId}`
    );
  },
  createMenuItem: function(restId, menuId, catId, data) {
    return axios.post(
      `${base}$rest=${restId}/&menus=${menuId}/&cat=${catId}/&items/`,
      data
    );
  },
  getMenuItemsByCat: function(restId, menuId, catId) {
    return axios.get(
      `${base}&rest/=${restId}/&menus=${menuId}/&cat=${catId}/&items/`
    );
  },
  updateMenuItem: function(restId, menuId, catId, itemId, data) {
    return axios.put(
      `${base}&rest/=${restId}/&menus=${menuId}/&cat=${catId}/&items=${itemId}`,
      data
    );
  },
  removeMenuItem: function(restId, menuId, catId, itemId) {
    return axios.delete(
      `${base}&rest/=${restId}/&menus=${menuId}/&cat=${catId}/&items=${itemId}`
    );
  }
};
