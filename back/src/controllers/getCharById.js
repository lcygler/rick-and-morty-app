const { API_BASE_URL } = process.env;
const axios = require("axios");

const getCharById = async (req, res) => {
  const { id: charId } = req.params;

  try {
    const response = await axios.get(`${API_BASE_URL}/character/${charId}`);
    const { id, image, name, gender, species } = response.data;
    res.status(200).json({ id, image, name, gender, species });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
