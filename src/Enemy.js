import { enemyColors } from "./variables";
import Wall from "./Wall";

export default class Enemy {
  static size = 10;

  constructor(canvas, wave, level = 0) {
    this.x = canvas.width + 10;
    this.y = Enemy.size + Math.random() * (canvas.height - Enemy.size * 2);
    this.level = level;
    this.health = 40 + level * 40 + wave * 5;
    this.value = 10 + level * 20 + wave * 2;
    this.lastAttack = new Date();
    this.attackInterval = level == 2 ? 600 : 1000;
    this.movePerFrame = (canvas.width - Wall.x + Wall.size) / 1000;
  }

  update(player) {
    if (this.health <= 0) {
      return false;
    }
    if (this.x > Wall.x + Wall.size + 2) {
      this.x -= this.movePerFrame;
    } else if (new Date() - this.lastAttack > this.attackInterval) {
      const damage = 7 + this.level * 5 - player.wall.level * 2;
      player.health -= damage > 0 ? damage : 0;
      this.health -= player.wall.fireLevel;
      this.lastAttack = new Date();
    }
    return true;
  }

  draw(ctx) {
    ctx.fillStyle = enemyColors[this.level].primary;
    ctx.fillRect(this.x, this.y, Enemy.size, Enemy.size);
    ctx.fillStyle = enemyColors[this.level].secondary;
    ctx.fillRect(
      this.x + Enemy.size / 4,
      this.y + Enemy.size / 4,
      Enemy.size / 2,
      Enemy.size / 2
    );
  }
}
