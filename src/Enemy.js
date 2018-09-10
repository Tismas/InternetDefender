import { enemyColors } from "./variables";
import Wall from "./Wall";

export default class Enemy {
  static size = 10;

  constructor(canvas) {
    this.x = canvas.width + 10;
    this.y = Enemy.size + Math.random() * (canvas.height - Enemy.size * 2);
    this.level = 0;
    this.health = 40;
    this.value = 10;
  }

  update() {
    if (this.health <= 0) {
      return false;
    }
    if (this.x > Wall.x + Wall.size + 2) {
      this.x -= 1;
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
