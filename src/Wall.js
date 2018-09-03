import Turret from "./Turret";
import { colors } from "./variables";

export default class Wall {
  static size = 10;

  draw = (canvas, ctx, wallLevel) => {
    ctx.fillStyle = colors[wallLevel].primary;
    ctx.fillRect(Turret.size * 3, 0, Wall.size, canvas.height);
    ctx.fillStyle = colors[wallLevel].secondary;
    ctx.fillRect(
      Turret.size * 3 + Wall.size / 4,
      0,
      Wall.size / 2,
      canvas.height
    );
  };
}
