export default class Button {
  static container = document.getElementById("ui");

  constructor({
    x,
    y,
    text,
    bgColor = "#000",
    hoverColor = "#020",
    color = "#fff",
    onClick
  } = {}) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.backgroundColor = bgColor;
    button.style.color = color;
    button.style.cursor = "pointer";
    button.innerText = text;
    button.onmouseenter = () => {
      button.style.backgroundColor = hoverColor;
    };
    button.onmouseleave = () => {
      button.style.backgroundColor = bgColor;
    };
    button.onclick = onClick;
    Button.container.appendChild(button);
  }
}
