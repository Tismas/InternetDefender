import Turret from "./Turret";
import Wall from "./Wall";

export default class Player {
  constructor(canvas) {
    this.turretsLevel = 1;
    this.turrets = [
      new Turret(Turret.size, canvas.height / 2 - Turret.size / 2)
    ];
    this.wallLevel = 1;
    this.wall = new Wall();
  }

  draw(canvas, ctx) {
    const { turretsLevel, wallLevel, turrets } = this;
    for (const turret of turrets) {
      turret.draw(ctx, turretsLevel);
    }
    this.wall.draw(canvas, ctx, wallLevel);
  }
}
