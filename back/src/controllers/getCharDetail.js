const { API_BASE_URL } = process.env;
const axios = require("axios");

const successHandler = (response, res) => {
  const { image, name, gender, status, origin, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ image, name, gender, status, origin, species }));
};

const errorHandler = (error, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

const getCharDetail = (res, id) => {
  axios
    .get(`${API_BASE_URL}/character/${id}`)
    .then((response) => successHandler(response, res))
    .catch((error) => errorHandler(error, res));
};

module.exports = { getCharDetail };
