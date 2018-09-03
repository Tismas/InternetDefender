export const random = (min, max) =>
  Math.round(min + Math.random() * (max - min));

export const clear = (canvas, ctx) => {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const drawBackground = (canvas, ctx) => {
  for (let y = 0; y < canvas.height; y += 10) {
    for (let x = 0; x < canvas.width; x += 10) {
      ctx.fillStyle = `rgb(${random(220, 230)}, ${random(200, 210)}, ${random(
        170,
        180
      )})`;
      ctx.fillRect(x, y, 10, 10);
    }
  }
};
