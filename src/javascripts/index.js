import axios from "axios";
import "../stylesheets/styles.scss";

axios.defaults.baseURL = 'http://localhost:8080';

document.getElementById('send_button').addEventListener('click', () => {
  const message = document.getElementById("hello_name").value;
  axios.get('/', {
    params: {
      name: message
    }
  }).then(function(response) {
    console.log(response.data);
    document.getElementById('backendValue').innerText = response.data.content;
  });
});
