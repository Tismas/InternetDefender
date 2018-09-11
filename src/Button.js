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
    this.button = document.createElement("button");
    this.button.classList.add("btn");
    this.button.style.left = x + "px";
    this.button.style.top = y + "px";
    this.button.style.backgroundColor = bgColor;
    this.button.style.color = color;
    this.button.style.cursor = "pointer";
    this.button.innerText = text;
    this.button.onmouseenter = () => {
      this.button.style.backgroundColor = hoverColor;
    };
    this.button.onmouseleave = () => {
      this.button.style.backgroundColor = bgColor;
    };
    this.button.onclick = onClick;
    Button.container.appendChild(this.button);
  }

  updatePosition(canvas) {
    const deltaX = canvas.width - window.innerWidth;
    const deltaY = canvas.height - window.innerHeight;
    const style = this.button.style;
    style.left =
      Number(style.left.slice(0, style.left.length - 2)) - deltaX + "px";
    style.top =
      Number(style.top.slice(0, style.top.length - 2)) - deltaY + "px";
  }
}
