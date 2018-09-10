import { playerColors } from "./variables";
import Enemy from "./Enemy";

export default class Turret {
  static size = 20;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lastAttack = new Date();
    this.attackAnimations = [];
  }

  shot(target) {
    this.attackAnimations.push({
      target,
      opacity: 1
    });
    this.lastAttack = new Date();
    target.health -= 10;
  }

  draw = (canvas, ctx, turretsLevel, index, total) => {
    const x = Turret.size;
    const y = (canvas.height / (total + 1)) * (index + 1);
    ctx.fillStyle = playerColors[turretsLevel].primary;
    ctx.fillRect(x, y, Turret.size, Turret.size);
    ctx.fillStyle = playerColors[turretsLevel].secondary;
    ctx.beginPath();
    ctx.arc(
      x + Turret.size / 2,
      y + Turret.size / 2,
      Turret.size / 3,
      0,
      Math.PI * 2
    );
    ctx.fill();

    for (const attack of this.attackAnimations) {
      const { target, opacity } = attack;

      // red line
      ctx.lineWidth = 4;
      ctx.strokeStyle = `rgba(125,0,0,${opacity})`;
      ctx.moveTo(this.x + Turret.size / 2, this.y + Turret.size / 2);
      ctx.lineTo(target.x + Enemy.size / 2, target.y + Enemy.size / 2);
      ctx.stroke();
      // yellow line
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(255,255,0,${opacity})`;
      ctx.moveTo(this.x + Turret.size / 2, this.y + Turret.size / 2);
      ctx.lineTo(target.x + Enemy.size / 2, target.y + Enemy.size / 2);
      ctx.stroke();

      attack.opacity -= 0.3;
      if (attack.opacity <= 0) {
        this.attackAnimations.splice(this.attackAnimations.indexOf(attack), 1);
      }
    }
  };
}
