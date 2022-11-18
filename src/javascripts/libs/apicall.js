import axios from "axios";

export const getWelcomeMessage = async (message) => {
  axios.defaults.baseURL = "http://localhost:8080";
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
