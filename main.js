import * as PIXI from "pixi.js";
import { Board } from "./src/game/board";
import { Timer } from "./src/components/controller/timer";
import { Alert } from "./src/components/controller/alert";
import { spriteRes } from "./src/utils/constants";

const app = new PIXI.Application();
app
  .init({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    resolution: window.devicePixelRatio || 2,
    backgroundColor: 0x6495ed,
    resizeTo: window,
  })
  .then(() => {
    window.ticker = PIXI.Ticker.shared;

    const board = new Board(10, 10, spriteRes, 80, 80);
    board.initBoard();
    app.stage.addChild(board);
    board.pivot.set(board.width / 2, board.height / 2);
    console.log(board.width, board.height);
    board.position.set(window.innerWidth / 2, window.innerHeight / 2);

    const timer = new Timer(20000, 300, 40, 0x741582);
    timer.startTimer();
    timer.position.set(200, 0);
    app.stage.addChild(timer);

    const timeupHint = new Alert(600, 400, "time up");
    timeupHint.pivot.set(timeupHint.width / 2, timeupHint.height / 2);
    timeupHint.position.set(window.innerWidth / 2, window.innerHeight / 2);
    app.stage.addChild(timeupHint);

    const gameoverHint = new Alert(600, 400, "game over");
    gameoverHint.pivot.set(timeupHint.width / 2, timeupHint.height / 2);
    gameoverHint.position.set(window.innerWidth / 2, window.innerHeight / 2);
    app.stage.addChild(gameoverHint);

    timer.setTimeUpEvent(() => {
      console.log("time up");
      timeupHint.show();
    });

    timeupHint.setClickEvent(() => {
      timer.reset();
    });

    board.setGameOverEvent(() => {
      console.log("game over");
      gameoverHint.show();
    });

    gameoverHint.setClickEvent(() => {
      timer.reset();
      board.reloadPuzzle();
    });

    board.setTileEliminateEvent((tiles) => {
      timer.addTimeBy(2000);
    });
    document.body.appendChild(app.canvas);
  });
