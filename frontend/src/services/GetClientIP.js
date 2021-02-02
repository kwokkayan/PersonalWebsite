// Default provides autocomplete and parameter typings
const axios = require("axios").default;

function GetClientIP() {
  return axios.get("http://localhost:3000/api/ip");
}

module.exports = {
  GetClientIP,
};
