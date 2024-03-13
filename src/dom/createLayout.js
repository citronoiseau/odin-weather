export default function createLayout() {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.id = "header";
  content.appendChild(header);

  const body = document.createElement("div");
  body.id = "main";
  content.appendChild(body);
}
