import { playerColors } from "./variables";

export default class Wall {
  static size = 10;
  static x = 60;

  draw = (canvas, ctx, wallLevel) => {
    ctx.fillStyle = playerColors[wallLevel].primary;
    ctx.fillRect(Wall.x, 0, Wall.size, canvas.height);
    ctx.fillStyle = playerColors[wallLevel].secondary;
    ctx.fillRect(Wall.x + Wall.size / 4, 0, Wall.size / 2, canvas.height);
  };
}
