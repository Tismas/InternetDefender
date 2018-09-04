import { enemyColors } from "./variables";

export default class Enemy {
  static size = 10;

  constructor(canvas) {
    this.x = canvas.width + 10;
    this.y = Enemy.size + Math.random() * (canvas.height - Enemy.size * 2);
    this.level = 0;
  }

  update() {
    this.x -= 1;
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
