import axios from "axios";

export const getWelcomeMessage = async (message) => {
  axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:8080" : "http://example.com"
  let rval = "";
  await axios
    .get("/", {
      params: {
        name: message,
      },
    })
    .then(function (response) {
      rval = response.data;
    });
  return rval;
};
