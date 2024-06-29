import * as PIXI from "pixi.js";

export class Timer extends PIXI.Container {
  constructor(maxTime, width, height, color) {
    super();
    this.maxTime = maxTime;
    this.time = maxTime;
    this.timerWidth = width;
    this.timerHeight = height;
    this.timerColor = color;
    this.isTimeUp = false;
    this.initTimer();
    this.initEvents();
  }

  setIsTimeUp(isTimeUp) {
    this.isTimeUp = isTimeUp;
  }

  setTime(time) {
    this.time = time;
    //更改timer的宽度
    if (this.time >= this.maxTime) {
      this.time = this.maxTime;
      this.setIsTimeUp(false);
    }

    if (this.time <= 0) {
      this.emit("timeUp");
      this.timer.width = 0;
      this.time = 0; // in ms
    }

    this.timer.width = (this.time / this.maxTime) * this.timerWidth;
  }

  setTimeUpEvent(callback) {
    this.on("timeUp", () => {
      if (!this.isTimeUp) {
        callback();
      }
      this.setIsTimeUp(true);
    });
  }

  addTimeBy(time) {
    this.setTime(this.time + time);
  }

  minusTimeBy(time) {
    this.setTime(this.time - time);
  }

  reset() {
    this.setTime(this.maxTime);
  }

  startTimer() {
    window.ticker.add((delta) => {
      this.setTime(this.time - delta.deltaMS);
    }, this);
  }

  getTime() {
    return this.time;
  }

  initTimer() {
    const graphics = new PIXI.Graphics();
    graphics.rect(0, 0, this.timerWidth, this.timerHeight);
    graphics.fill({ color: this.timerColor, alpha: 1 });
    this.addChild(graphics);
    this.timer = graphics;
  }

  initEvents() {
    this.on("update", (time) => {
      this.setTime(time);
    });
  }
}
