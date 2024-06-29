import * as PIXI from "pixi.js";
import { Puzzle } from "./puzzle";
import { Tile } from "../components/tile/tile";
import { ColorContent } from "../components/tile/content";
import { drawPath } from "../utils/line";
import { fadeInOut } from "../utils/anime";

export class Board extends PIXI.Container {
  constructor(row, col, contentObj, tileWidth = 100, tileHeight = 100) {
    super();
    this.row = row;
    this.col = col;
    this.contentObj = contentObj;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.puzzle = new Puzzle(row, col, contentObj);

    this.eventMode = "static";
    this.tileMatrix = [];
    this.selectedTiles = [];
    this.initEvents();
  }

  reloadPuzzle() {
    this.puzzle = new Puzzle(this.row, this.col, this.contentObj);
    this.tileMatrix = [];
    this.selectedTiles = [];
    this.initBoard();
    this.clearSelectedTiles();
  }

  initBoard() {
    for (let i = 0; i < this.row; i++) {
      this.tileMatrix.push([]);
      for (let j = 0; j < this.col; j++) {
        const tile = new Tile(this.tileWidth, this.tileHeight);
        // const content = new ColorContent(
        //   this.puzzle.getEleAt(j, i),
        //   this.tileWidth / 2,
        //   this.tileHeight / 2
        // );
        const content = new this.contentObj.contentConstructor(
          this.puzzle.getEleAt(j, i).value,
          this.puzzle.getEleAt(j, i).key,
          this.tileWidth - this.contentObj.contentPadding * 2,
          this.tileHeight - this.contentObj.contentPadding * 2
        );
        //设置内容和值
        tile.setContentCenter(content, content.getValue());
        this.addChild(tile);
        this.tileMatrix[i].push(tile);
        tile.position.set(j * this.tileWidth, i * this.tileHeight);
        tile.setCoordinate(j, i);
        //设置鼠标事件
        this.setTileEvent(tile);
      }
    }
  }

  initEvents() {
    this.on("tileClick", (tile) => {
      if (this.selectedTiles.length == 0) {
        this.pushSelectedTiles(tile);
      } else if (this.selectedTiles.length == 1) {
        if (
          this.selectedTiles[0].isContentEquals(tile) &&
          this.selectedTiles[0] != tile
        ) {
          //选择相同元素
          this.pushSelectedTiles(tile);
          console.log("选择相同内容元素", this.selectedTiles);
          //检查路径是否可达
          let path = this.checkSelected(
            this.selectedTiles[0].getCoordinate(),
            this.selectedTiles[1].getCoordinate()
          );
          if (path) {
            console.log("可达");
            //添加始末点到路径上
            path.unshift(this.selectedTiles[0].getCoordinate());
            path.push(this.selectedTiles[1].getCoordinate());
            //绘制路径
            this.drawPath(path);
            //消除匹配tile
            this.eliminateTiles(this.selectedTiles);
            this.onGameStateChange();
            this.clearSelectedTiles();
          } else {
            console.log("不可达");
            this.changeSelectedTiles(tile);
          }
        } else if (this.selectedTiles[0] == tile) {
          //取消选择
          console.log("取消选择");
          this.clearSelectedTiles();
        } else {
          //选择不同元素
          this.changeSelectedTiles(tile);
          console.log("选择不同元素");
        }
      }
    });
  }

  setEvent(name, callback) {
    this.on(name, callback);
  }

  drawPath(path) {
    console.log("绘制路径", path);
    let pathCoordinates = [];
    path.forEach((node) => {
      let pathCoordinate = {
        x: node.x * this.tileWidth + this.tileWidth / 2,
        y: node.y * this.tileHeight + this.tileHeight / 2,
      };
      pathCoordinates.push(pathCoordinate);
    });
    let linkLine = drawPath(pathCoordinates, 0x81ecec);
    this.addChild(linkLine);
    //添加动画
    fadeInOut(linkLine);
  }

  onGameStateChange() {
    //游戏状态改变时调用
    let leftCount = this.puzzle.getLeftCount();
    console.log("leftCount", leftCount);
    if (leftCount == 0) {
      this.emit("gameover");
    }
  }

  eliminateTiles(tiles) {
    tiles.forEach((tile) => {
      //puzzle numMatrix 对应位置置零
      this.puzzle.setNumMatrixAt(
        tile.getCoordinate().x,
        tile.getCoordinate().y,
        0
      );
      //puzzle eleMatrix 对应位置置空
      this.puzzle.clearEleMatrixAt(
        tile.getCoordinate().x,
        tile.getCoordinate().y
      );
      //tileMatrix 对应位置置空
      this.tileMatrix[tile.getCoordinate().y][tile.getCoordinate().x] = null;
      this.removeChild(tile);
      tile.emit("deselected");
    });
    this.emit("eliminate", tiles);
  }

  setTileEliminateEvent(callback) {
    this.on("eliminate", callback);
  }

  getTileAt(x, y) {
    return this.tileMatrix[y][x];
  }

  getTileContentAt(x, y) {
    return this.tileMatrix[y][x].getContentValue();
  }

  clearSelectedTiles() {
    this.selectedTiles.forEach((tile) => {
      tile.emit("deselected");
    });
    this.selectedTiles = [];
  }

  pushSelectedTiles(tile) {
    tile.emit("selected");
    this.selectedTiles.push(tile);
  }

  changeSelectedTiles(tile) {
    // this.dequeueSelectedTiles();
    this.clearSelectedTiles();
    this.pushSelectedTiles(tile);
  }

  dequeueSelectedTiles() {
    let deselectedTile = this.selectedTiles.shift();
    deselectedTile.emit("deselected");
  }

  emitTilesSelected(tiles) {
    tiles.forEach((tile) => {
      tile.emit("selected");
    });
  }

  emitTilesDeselected(tiles) {
    tiles.forEach((tile) => {
      tile.emit("deselected");
    });
  }

  setTileEvent(tile) {
    tile.onmousedown = (e) => {
      e.stopPropagation();
      this.emit("tileClick", tile);
    };
  }

  setGameOverEvent(callback) {
    this.on("gameover", callback);
  }

  getPuzzle() {
    return this.puzzle;
  }

  checkSelected(A, B) {
    //路径是否可达
    return this.puzzle.checkPath(A, B);
  }
}
