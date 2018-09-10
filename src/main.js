import { drawBackground, clear } from "./utils";
import Player from "./Player";
import Button from "./Button";
import Enemy from "./Enemy";
import Shop from "./Shop";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wave = 0;
let toSpawn = 5;
let gameOver = false;
const player = new Player();
const shop = new Shop();
const enemies = [];

window.addTurret = player.buyTurret.bind(null, shop);
window.increateFireRate = player.increateFireRate.bind(null, shop);
window.upgradeWall = player.wall.upgrade.bind(null, shop, player);
window.upgradeWallDmg = player.wall.upgradeFire.bind(null, shop, player);

const spawnEnemies = () => {
  const enemyLevel =
    0 + Number(Math.random() * 50 < wave) + Number(Math.random() * 500 < wave);
  enemies.push(new Enemy(canvas, wave, enemyLevel));
  toSpawn -= 1;
  if (toSpawn > 0) {
    setTimeout(spawnEnemies, 1000);
  } else {
    toSpawn = Math.min(20, 5 + Math.round(wave / 5));
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
    if (!enemy.update(player)) {
      deadEnemies.push(enemy);
    }
  }
  for (const enemy of deadEnemies) {
    enemies.splice(enemies.indexOf(enemy), 1);
    player.gold += enemy.value;
  }

  if (player.health <= 0) {
    gameOver = true;
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
    `Wave: ${wave}    ` +
      `Enemies: ${enemies.length}    ` +
      `Gold: ${player.gold}    ` +
      `Fire rate: ${Math.round(player.attackInterval) / 1000}    ` +
      `Health: ${player.health}`,
    100,
    20
  );
};

const loop = () => {
  if (!gameOver) {
    clear(canvas, ctx);
    update();
    draw();
  } else {
    clear(canvas, ctx);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillText("You've gone offline", canvas.width / 2, canvas.height / 2);
  }
  setTimeout(loop, 1000 / 60);
};

loop();

new Button({
  x: canvas.width - 100,
  y: canvas.height - 50,
  text: "Next wave",
  onClick: startNextWave
});

new Button({
  x: canvas.width - 150,
  y: canvas.height - 50,
  text: "Shop",
  onClick: shop.show
});
