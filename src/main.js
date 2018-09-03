import { drawBackground, clear } from "./utils";
import Player from "./Player";
import Button from "./Button";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player(canvas);
const enemies = [];
const buttons = [
  new Button(ctx, canvas.width - 80, canvas.height - 50, "Next wave")
];

const update = () => {};
const draw = () => {
  drawBackground(canvas, ctx);
  player.draw(canvas, ctx);
  for (const enemy of enemies) {
    enemy.draw(ctx);
  }
  for (const button of buttons) {
    button.draw(ctx);
  }
};

const loop = () => {
  clear(canvas, ctx);
  update();
  draw();
};

loop();
