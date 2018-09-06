import { drawBackground, clear } from "./utils";
import Player from "./Player";
import Button from "./Button";
import Enemy from "./Enemy";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wave = 0;
let toSpawn = 10;
const player = new Player(canvas);
const enemies = [];

const spawnEnemies = () => {
  enemies.push(new Enemy(canvas));
  toSpawn -= 1;
  if (toSpawn > 0) {
    setTimeout(spawnEnemies, 1000);
  }
};

const startNextWave = () => {
  if (enemies.length == 0) {
    wave += 1;
    spawnEnemies();
  }
};

const update = () => {
  player.update(enemies);
  const deadEnemies = [];
  for (const enemy of enemies) {
    if (!enemy.update()) {
      deadEnemies.push(enemy);
    }
  }
  for (const enemy of deadEnemies) {
    enemies.splice(enemies.indexOf(enemy), 1);
    player.gold += enemy.value;
  }
};
const draw = () => {
  drawBackground(canvas, ctx);
  player.draw(canvas, ctx);
  for (const enemy of enemies) {
    enemy.draw(ctx);
  }

  ctx.fillStyle = "#000";
  ctx.font = "20px Monospace";
  ctx.fillText(
    `Wave: ${wave}    Enemies: ${enemies.length}    Gold: ${player.gold}`,
    100,
    20
  );
};

const loop = () => {
  clear(canvas, ctx);
  update();
  draw();
  setTimeout(loop, 1000 / 60);
};

loop();

new Button({
  x: canvas.width - 100,
  y: canvas.height - 50,
  text: "Next wave",
  onClick: startNextWave
});
