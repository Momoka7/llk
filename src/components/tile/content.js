import * as PIXI from "pixi.js";

export class Content extends PIXI.Container {
  constructor(value) {
    super();
    this.value = value;
    this.eventMode = "static";
  }

  initContent() {}

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}

export class ColorContent extends Content {
  constructor(color, name, width, height) {
    super(color);
    this.color = color;
    this.name = name;
    this.contentWidth = width;
    this.contentHeight = height;
    this.initContent();
  }

  initContent() {
    const graphics = new PIXI.Graphics();
    graphics.rect(0, 0, this.contentWidth, this.contentHeight);
    graphics.fill({ color: this.color, alpha: 1 });
    this.addChild(graphics);
  }
}

export class SpriteContent extends Content {
  constructor(texture, name, width, height) {
    super(name);
    // this.sprite = new PIXI.Sprite(texture);
    this.contentWidth = width;
    this.contentHeight = height;
    this.loadTexture(texture);
  }

  loadTexture(textureUrl) {
    PIXI.Assets.load(textureUrl).then((texture) => {
      this.contentTexture = texture;
      this.sprite = new PIXI.Sprite(texture);
      this.sprite.width = this.contentWidth;
      this.sprite.height = this.contentHeight;
      this.addChild(this.sprite);
    });
  }
}
