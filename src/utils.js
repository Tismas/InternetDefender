export const random = (min, max) =>
  Math.round(min + Math.random() * (max - min));

export const clear = (canvas, ctx) => {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export class Mouse {
  constructor(canvas) {
    canvas.onmousemove = this.handleMouseMove;
    this.x = 0;
    this.y = 0;
  }
  handleMouseMove = e => {
    this.x = e.clientX;
    this.y = e.clientY;
  };
  intersects = (x, y, w, h) => {
    return this.x > x && this.x < x + w && this.y > y && this.y < y + h;
  };
}

const mapColors = [];

export const drawBackground = (canvas, ctx) => {
  for (let y = 0; y < canvas.height; y += 10) {
    for (let x = 0; x < canvas.width; x += 10) {
      let color = mapColors[y / 10 + x / 10 + ((y / 10) * canvas.height) / 10];
      if (!color) {
        color = `rgb(${random(220, 230)}, ${random(200, 210)}, ${random(
          170,
          180
        )})`;
        mapColors[y / 10 + x / 10 + ((y / 10) * canvas.height) / 10] = color;
      }
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 10, 10);
    }
  }
};
