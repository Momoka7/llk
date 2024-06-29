import * as PIXI from "pixi.js";
import { applyGlowFliter } from "../../utils/effect";

export class Tile extends PIXI.Container {
  constructor(width, height) {
    super();
    this.tileWidth = width;
    this.tileHeight = height;
    this.eventMode = "static";
    this.coordinate = { x: 0, y: 0 };
    this.isSelected = false;
    this.initTemplate();
    this.initEvents();
  }

  initTemplate() {
    const graphics = new PIXI.Graphics();
    graphics.roundRect(0, 0, this.tileWidth, this.tileHeight);
    graphics.fill({ color: 0xffff0b, alpha: 0.5 });
    // graphics.stroke({ width: 2, color: 0xff00ff });
    this.template = graphics;
    this.addChild(graphics);
  }

  initEvents() {
    this.on("selected", () => {
      applyGlowFliter(this, {
        outerStrength: 3,
        color: 0x741258,
        distance: 10,
      });
      this.isSelected = true;
    });

    this.on("deselected", () => {
      this.isSelected = false;
      this.filters = [];
    });
  }

  onmouseover() {
    if (!this.isSelected) {
      applyGlowFliter(this, {
        outerStrength: 3,
        color: 0x741258,
        distance: 10,
      });
    }
  }

  onmouseleave() {
    if (this.isSelected) return;
    this.filters = [];
  }

  setCoordinate(x, y) {
    this.coordinate.x = x;
    this.coordinate.y = y;
  }

  getCoordinate() {
    return this.coordinate;
  }

  setContent(content, value = null) {
    this.content = content;
    this.addChild(content);
    if (value) {
      this.setContentValue(value);
    }
  }

  setContentValue(value) {
    this.content.value = value;
  }

  getContentValue() {
    return this.content.value;
  }

  isContentEquals(tile) {
    return this.content.value == tile.content.value;
  }

  setContentCenter(content, value = null) {
    this.content = content;
    content.position.set(
      this.width / 2 - content.contentWidth / 2,
      this.height / 2 - content.contentHeight / 2
    );
    if (value) {
      this.setContentValue(value);
    }
    this.addChild(content);
  }

  getTemplate() {
    return this.template;
  }
}
