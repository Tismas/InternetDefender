import { playerColors } from "./variables";

export default class Turret {
  static size = 20;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw = (ctx, turretsLevel) => {
    const { x, y } = this;
    ctx.fillStyle = playerColors[turretsLevel].primary;
    ctx.fillRect(x, y, Turret.size, Turret.size);
    ctx.fillStyle = playerColors[turretsLevel].secondary;
    ctx.beginPath();
    ctx.arc(
      x + Turret.size / 2,
      y + Turret.size / 2,
      Turret.size / 3,
      0,
      Math.PI * 2
    );
    ctx.fill();
  };
}
