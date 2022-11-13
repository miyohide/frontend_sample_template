import "../stylesheets/styles.scss";
import { getRootPathWithName } from "./libs/apicall";
import { hello } from "./libs/hello";

document.getElementById('send_button').addEventListener('click', async () => {
  const message = document.getElementById("hello_name").value;
  console.log(hello(message));
  const backendValue = await getRootPathWithName(message)
  console.log(backendValue);
  document.getElementById('backendValue').innerText = backendValue.content;
});
