// Default provides autocomplete and parameter typings
const axios = require("axios").default;

function GetClientIP() {
  axios
    .get("/api/ip")
    .then((res) => res)
    .catch((err) => console.log(err));
}

module.exports = {
  GetClientIP,
};
