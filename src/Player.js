import Turret from "./Turret";
import Wall from "./Wall";

export default class Player {
  constructor(canvas) {
    this.turretsLevel = 0;
    this.wallLevel = 0;
    this.turrets = [
      new Turret(Turret.size, canvas.height / 2 - Turret.size / 2)
    ];
    this.wall = new Wall();
    this.lastAttack = new Date();
    this.attackInterval = 1000;
    this.gold = 0;
  }

  draw(canvas, ctx) {
    const { turretsLevel, wallLevel, turrets } = this;
    for (const turret of turrets) {
      turret.draw(ctx, turretsLevel);
    }
    this.wall.draw(canvas, ctx, wallLevel);
  }

  update(enemies) {
    if (enemies.length && new Date() - this.lastAttack > this.attackInterval) {
      enemies[0].health -= 10;
      this.lastAttack = new Date();
    }
  }
}
