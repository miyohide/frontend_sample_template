import "../stylesheets/styles.scss";
import { getWelcomeMessage } from "./libs/apicall";

document.getElementById("send_button").addEventListener("click", async () => {
  const message = document.getElementById("hello_name").value;
  const backendValue = await getWelcomeMessage(message);
  document.getElementById("backendValue").innerText = backendValue.content;
});
