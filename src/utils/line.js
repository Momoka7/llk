import * as PIXI from "pixi.js";

export function drawLine(x1, y1, x2, y2, color) {
  let graphics = new PIXI.Graphics();
  graphics.moveTo(x1, y1);
  graphics.lineTo(x2, y2);
  graphics.stroke({ width: 10, color: color });
  return graphics;
}

export function drawPath(path, color) {
  let graphics = new PIXI.Graphics();
  graphics.moveTo(path[0].x, path[0].y);
  for (let i = 1; i < path.length; i++) {
    graphics.lineTo(path[i].x, path[i].y);
  }
  graphics.stroke({ width: 10, color: color });
  return graphics;
}
