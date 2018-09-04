export default class Button {
  static marginH = 5;
  static marginW = 10;

  constructor(ctx, x, y, text, bgColor, hoverColor, color) {
    this.textHeight = 16;

    ctx.fontStyle = `${this.textHeight}px Monospace`;
    const textWidth = ctx.measureText(text).width;

    this.x = x;
    this.y = y;
    this.text = text;
    this.width = textWidth + Button.marginW * 2;
    this.height = this.textHeight + 10 + Button.marginH * 2;
    this.bgColor = bgColor || "#939393";
    this.hoverColor = hoverColor || "#636363";
    this.color = color || "#fff";
  }

  draw(ctx, mouse) {
    if (mouse.intersects(this.x, this.y, this.width, this.height)) {
      ctx.fillStyle = this.hoverColor;
    } else {
      ctx.fillStyle = this.bgColor;
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fillText(
      this.text,
      this.x + Button.marginW,
      this.y + this.textHeight + Button.marginH
    );
  }
}
