import { playerColors } from "./variables";

export default class Wall {
  static size = 10;
  static x = 60;

  constructor() {
    this.level = 0;
    this.fireLevel = 0;
  }

  upgrade = (shop, player) => {
    if (player.gold >= shop.costs[2]) {
      this.level += 1;
      player.health += 100;
      player.maxHealth += 100;
      player.gold -= shop.costs[2];
      shop.update(2, player);
    }
  };

  upgradeFire = (shop, player) => {
    if (player.gold >= shop.costs[3]) {
      this.fireLevel += 1;
      player.gold -= shop.costs[3];
      shop.update(3, player);
    }
  };

  draw = (canvas, ctx) => {
    ctx.fillStyle = playerColors[this.level].primary;
    ctx.fillRect(Wall.x, 0, Wall.size, canvas.height);
    ctx.fillStyle = playerColors[this.level].secondary;
    ctx.fillRect(Wall.x + Wall.size / 4, 0, Wall.size / 2, canvas.height);
  };
}
