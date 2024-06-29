import * as PIXI from "pixi.js";

export class Alert extends PIXI.Container {
  constructor(width, height, text) {
    super();
    this.layoutWidth = width;
    this.layoutHeight = height;
    this.text = text;
    this.visible = false;
    this.eventMode = "static";
    this.initEvents();
    this.initLayout();
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  initLayout() {
    const bg = new PIXI.Graphics();
    bg.roundRect(0, 0, this.layoutWidth, this.layoutHeight, 10);
    bg.fill({ color: 0xa477b3, alpha: 0.5 });
    this.addChild(bg);

    const text = new PIXI.Text({
      text: this.text,
      style: {
        fontSize: 24,
        fill: 0xffffff,
      },
    });

    text.position.set(
      this.layoutWidth / 2 - text.width / 2,
      this.layoutHeight / 2 - text.height / 2
    );
    this.addChild(text);
  }

  setClickEvent(callback) {
    this.on("click", () => {
      callback();
    });
  }

  initEvents() {
    this.on("click", () => {
      this.hide();
    });
  }
}
