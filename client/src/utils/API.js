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
  createReservation: function(restID, data) {
    return axios.post(`${base}&rest/=${restID}/&reservations`, data);
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
    return axios.put(`${base}&rest/=${restId}`, data);
  },
  removeRestaurant: function(restId) {
    return axios.delete(`${base}&rest/=${restId}`);
  },
  addMenuCategory: function (restId, data) {
    return axios.post(`${base}&rest/=${restId}/&menus/&cat`, data)
  },
  addMenuItem: function (restId, catIndex, data) {
    return axios.post(`${base}&rest/=${restId}/&menus/&cat=${catIndex}/&items`, data)
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
};
