import Pathfinding from "pathfinding";

export class Node {
  constructor(x, y) {
    this._x = x;
    this._y = y;
    this.altX = x;
    this.altY = y;
    this.isAlternateNode = false;
    this.alternate = false;
  }

  setAltNode(x, y) {
    this.isAlternateNode = true;
    this.altX = x;
    this.altY = y;
  }

  setAlternativeState(flag) {
    this.alternate = flag;
  }

  get x() {
    return this.alternate ? this.altX : this._x;
  }

  get y() {
    return this.alternate ? this.altY : this._y;
  }

  isAltNode() {
    return this.isAlternateNode;
  }
}

function countConers(path) {
  return path.length - 2;
}

function calculatePathLenght(orthPath, isObj = false) {
  let len = 0;
  for (let i = 0; i < orthPath.length - 1; i++) {
    if (isObj) {
      len +=
        Math.abs(orthPath[i].x - orthPath[i + 1].x) +
        Math.abs(orthPath[i].y - orthPath[i + 1].y);
    } else {
      len +=
        Math.abs(orthPath[i][0] - orthPath[i + 1][0]) +
        Math.abs(orthPath[i][1] - orthPath[i + 1][1]);
    }
  }
  return len;
}

//添加路径插值
function traversePath(path, grid) {
  const simplified_path = [new Node(path[0][0], path[0][1])];
  if (path.length < 3) {
    simplified_path.push(
      new Node(path[path.length - 1][0], path[path.length - 1][1])
    );
    return simplified_path;
  }

  for (let i = 0; i < path.length - 1; i++) {
    if (path[i][0] != path[i + 1][0] && path[i][1] != path[i + 1][1]) {
      //不在同一行或者不在同一列
      let addtionalNode = recordAlternateNode(path[i], path[i + 1], grid);
      simplified_path.push(addtionalNode);
      simplified_path.push(new Node(path[i + 1][0], path[i + 1][1]));
    } else {
      //   console.log("在同一行或者同一列");
    }
  }

  simplified_path.push(
    new Node(path[path.length - 1][0], path[path.length - 1][1])
  );

  //   return reducePath(simplified_path);
  return simplified_path;
}

function traverseAlternatePath(path, origPath) {
  if (isSatisfied(path, origPath)) {
    return true;
  }
  let altBitMap = 0x00;
  let altNodeIdxList = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i].isAltNode()) {
      altNodeIdxList.push(i);
      altBitMap |= 1 << (altNodeIdxList.length - 1);
    }
  }

  while (altBitMap > 0) {
    let poss = findSetBitPositions(altBitMap);
    setNoAlternate(path);
    for (let i = 0; i < poss.length; i++) {
      //切换可选拐点
      path[altNodeIdxList[poss[i]]].setAlternativeState(true);
    }
    // reducePath(path);
    if (isSatisfied(path, origPath)) return true;
    altBitMap -= 1;
  }

  return false;
}

function setNoAlternate(path) {
  for (let i = 0; i < path.length; i++) {
    path[i].setAlternativeState(false);
  }
}

function findSetBitPositions(n) {
  let positions = [];
  let position = 0;

  while (n > 0) {
    if (n & 1) {
      positions.push(position);
    }
    n >>= 1;
    position++;
  }

  return positions;
}
function isSatisfied(path, origPath) {
  if (countConers(origPath) <= 2) {
    return true;
  }
  //距离、拐点均满足
  let distSatisfied =
    calculatePathLenght(path, true) == calculatePathLenght(origPath);
  let turns = countConers(path) - reducePathCount(path) <= 2;

  return distSatisfied && turns;
}

function reducePathCount(simplified_path) {
  let count = 0;
  for (let i = 1; i < simplified_path.length - 1; i++) {
    if (
      (simplified_path[i].x == simplified_path[i + 1].x &&
        simplified_path[i].x == simplified_path[i - 1].x) ||
      (simplified_path[i].y == simplified_path[i + 1].y &&
        simplified_path[i].y == simplified_path[i - 1].y)
    ) {
      count++;
    }
  }
  return count;
}

//去除直线路径点
function reducePath(simplified_path) {
  const res = [simplified_path[0]];
  for (let i = 1; i < simplified_path.length - 1; i++) {
    if (
      (simplified_path[i].x == simplified_path[i + 1].x &&
        simplified_path[i].x == simplified_path[i - 1].x) ||
      (simplified_path[i].y == simplified_path[i + 1].y &&
        simplified_path[i].y == simplified_path[i - 1].y)
    ) {
      //   simplified_path.splice(i, 1);
    } else {
      res.push(simplified_path[i]);
    }
  }

  res.push(simplified_path[simplified_path.length - 1]);

  return res;
}

function recordAlternateNode(currentNode, nextNode, grid) {
  let isWalkable1 = grid.isWalkableAt(nextNode[0], currentNode[1]);
  let isWalkable2 = grid.isWalkableAt(currentNode[0], nextNode[1]);

  if (isWalkable1 && isWalkable2) {
    const node = new Node(nextNode[0], currentNode[1]);
    node.setAltNode(currentNode[0], nextNode[1]);
    return node;
  }
  if (isWalkable1) {
    return new Node(nextNode[0], currentNode[1]);
  }
  if (isWalkable2) {
    return new Node(currentNode[0], nextNode[1]);
  }
  console.log("unable to record alternate node", currentNode, nextNode);
  return null;
}

export function matchPath(grid, begin, end) {
  const grid2 = grid.clone();

  grid.setWalkableAt(begin.x, begin.y, true);
  grid.setWalkableAt(end.x, end.y, true);
  const finder = new Pathfinding.AStarFinder({ dontCrossCorners: true });

  const path = finder.findPath(begin.x, begin.y, end.x, end.y, grid);

  if (path.length <= 0) {
    return null;
  }
  console.log(path, grid2);

  const newPath = Pathfinding.Util.smoothenPath(grid2, path);

  const traversed_path = traversePath(newPath, grid);
  console.log("newPath", newPath);
  console.log("traversed_path", traversed_path);
  let canMatch = traverseAlternatePath(traversed_path, newPath);
  if (canMatch) {
    console.log("matched traversed_path", traversed_path);
    console.log("reducePath", reducePath(traversed_path));
    return reducePath(traversed_path);
  }
  return null;
}
