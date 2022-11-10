import { hello } from "./libs/hello";
import axios from "axios";
import "../stylesheets/styles.scss";

const message = "Hello World";

hello(message);

axios.defaults.baseURL = 'http://localhost:8080';

document.getElementById('send_button').addEventListener('click', () => {
  axios.get('/', {
    params: {
      name: message
    }
  }).then(function(response) {
    console.log(response.data);
    document.getElementById('backendValue').innerText = response.data.content;
  });
});
