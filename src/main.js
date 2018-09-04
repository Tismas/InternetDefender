import { drawBackground, clear, Mouse } from "./utils";
import Player from "./Player";
import Button from "./Button";
import Enemy from "./Enemy";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = new Mouse(canvas);
const player = new Player(canvas);
const enemies = [new Enemy(canvas)];
const buttons = [
  new Button(ctx, canvas.width - 80, canvas.height - 50, "Next wave")
];

const update = () => {
  for (const enemy of enemies) {
    enemy.update();
  }
};
const draw = () => {
  drawBackground(canvas, ctx);
  player.draw(canvas, ctx);
  for (const enemy of enemies) {
    enemy.draw(ctx);
  }
  for (const button of buttons) {
    button.draw(ctx, mouse);
  }
};

const loop = () => {
  clear(canvas, ctx);
  update();
  draw();
  setTimeout(loop, 1000 / 60);
};

loop();
