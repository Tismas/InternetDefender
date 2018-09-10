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
  const tileSize = 30;
  for (let y = 0; y < canvas.height; y += tileSize) {
    for (let x = 0; x < canvas.width; x += tileSize) {
      let color =
        mapColors[
          y / tileSize +
            x / tileSize +
            ((y / tileSize) * canvas.height) / tileSize
        ];
      if (!color) {
        color = `rgb(${random(220, 225)}, ${random(200, 205)}, ${random(
          175,
          180
        )})`;
        mapColors[
          y / tileSize +
            x / tileSize +
            ((y / tileSize) * canvas.height) / tileSize
        ] = color;
      }
      ctx.fillStyle = color;
      ctx.fillRect(x, y, tileSize, tileSize);
    }
  }
};
