import Turret from "./Turret";
import Wall from "./Wall";

export default class Player {
  constructor(canvas) {
    this.turretsLevel = 0;
    this.wallLevel = 0;
    this.turrets = [new Turret()];
    this.wall = new Wall();
    this.gold = 0;
    this.attackInterval = 1000;
  }

  draw(canvas, ctx) {
    const { turretsLevel, wallLevel, turrets } = this;
    for (const turret of turrets) {
      turret.draw(
        canvas,
        ctx,
        turretsLevel,
        turrets.indexOf(turret),
        turrets.length
      );
    }
    this.wall.draw(canvas, ctx, wallLevel);
  }

  buyTurret = shop => {
    if (this.gold >= shop.costs[0]) {
      this.turrets.push(new Turret());
      this.gold -= shop.costs[0];
      shop.updateCost(0);
    }
  };

  increateFireRate = shop => {
    if (this.gold >= shop.costs[1]) {
      this.attackInterval *= 0.9;
      this.gold -= shop.costs[1];
      shop.updateCost(1);
    }
  };

  update(enemies) {
    for (const turret of this.turrets) {
      const sinceLastattack = new Date() - turret.lastAttack;
      if (enemies.length && sinceLastattack > this.attackInterval) {
        turret.shot(enemies[0]);
      }
    }
  }
}
