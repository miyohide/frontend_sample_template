import { hello } from "./libs/hello";
import axios from "axios";
import "../stylesheets/styles.scss";

const message = "Hello World";

hello(message);

document.getElementById('send_button').addEventListener('click', () => {
  axios.get('http://localhost:8081/', {
    params: {
      name: message
    }
  }).then(function(response) {
    console.log(response.data);
    document.getElementById('backendValue').innerText = response.data.content;
  });
});
