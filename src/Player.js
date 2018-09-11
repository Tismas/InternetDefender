import Turret from "./Turret";
import Wall from "./Wall";

export default class Player {
  constructor() {
    this.turretsLevel = 0;
    this.turrets = [new Turret()];
    this.wall = new Wall();
    this.health = 100;
    this.maxHealth = 100;
    this.gold = 0;
    this.attackInterval = 1000;
  }

  draw(canvas, ctx) {
    const { turretsLevel, turrets } = this;
    for (const turret of turrets) {
      turret.draw(
        canvas,
        ctx,
        turretsLevel,
        turrets.indexOf(turret),
        turrets.length
      );
    }
    this.wall.draw(canvas, ctx);
  }

  buyTurret = shop => {
    if (this.gold >= shop.costs[0]) {
      this.turrets.push(new Turret());
      this.gold -= shop.costs[0];
      shop.update(0, this);
    }
  };

  upgradeTurrets = shop => {
    if (this.gold >= shop.costs[4]) {
      this.turretsLevel += 1;
      this.gold -= shop.costs[4];
      shop.update(4, this);
    }
  };

  increateFireRate = shop => {
    if (this.gold >= shop.costs[1]) {
      this.attackInterval *= 0.98;
      this.gold -= shop.costs[1];
      shop.update(1, this);
    }
  };

  update(enemies) {
    for (const turret of this.turrets) {
      const sinceLastattack = new Date() - turret.lastAttack;
      if (sinceLastattack < this.attackInterval) return;
      let target = null;
      for (const enemy of enemies) {
        if (enemy.health > 0) {
          target = enemy;
          break;
        }
      }
      if (target) {
        turret.shot(target, this.turretsLevel + 1);
      }
    }
  }
}
