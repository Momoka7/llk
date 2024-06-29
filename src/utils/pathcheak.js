/**
 * 检查路径是否可行
 *
 * @param object A
 * @param object B
 *
 * @return boolean
 */

export function feasiblePath(A, B, matrix) {
  let rowNum = matrix.nodes.length;
  let colNum = matrix.nodes[0].length;
  // 检查A点与B点时否是相邻，相邻直接可消除
  if (checkAdjacent(A, B)) {
    return [A, B];
  }

  // 获取a与b的十字线
  var aPaths = getPaths(A, rowNum, colNum);
  var bPaths = getPaths(B, rowNum, colNum);
  //   console.log(aPaths, bPaths);

  // 从A点开始遍历
  for (var i = 0, n = aPaths.length; i < n; i++) {
    // 如果节点上存在图片，则跳过这次循环
    if (!matrix.isWalkableAt(aPaths[i].x, aPaths[i].y)) {
      continue;
    }

    // 检查A点到aPaths[i]点是否可行
    if (!checkTwoLine(aPaths[i], A, matrix)) {
      continue;
    }

    // 获取与A点十字线与B点十字线相交的横向与纵向相交的位置
    var bPosition = getSamePosition(bPaths, aPaths[i]);

    for (var j = 0, jn = bPosition.length; j < jn; j++) {
      // 如果节点上存在图片，则跳过这次循环
      if (!matrix.isWalkableAt(bPosition[j].x, bPosition[j].y)) {
        continue;
      }

      // 检查bPosition点到B点是否可行
      if (!checkTwoLine(bPosition[j], B, matrix)) {
        continue;
      }

      // 检查aPaths[i]点到bPosition点是否可行, 三条线都相通，表示可以消除
      if (checkTwoLine(aPaths[i], bPosition[j], matrix)) {
        // console.log("可行", aPaths[i], bPosition[j]);
        return [aPaths[i], bPosition[j]];
      }
    }
  }
  return false;
}

// 获取某点的十字线
function getPaths(o, rowNum, colNum) {
  var paths = [];
  for (var i = o.y; i < rowNum; i++) {
    paths.push({ x: o.x, y: i });
  }

  for (var i = o.y; i >= 0; i--) {
    paths.push({ x: o.x, y: i });
  }

  for (var i = o.x; i < colNum; i++) {
    paths.push({ x: i, y: o.y });
  }

  for (var i = o.x; i >= 0; i--) {
    paths.push({ x: i, y: o.y });
  }

  // for (var i = 0; i < colNum; i++) {
  //   paths.push({ x: i, y: o.y });
  // }
  return paths;
}

function getSamePosition(targetPaths, o) {
  var paths = new Array({ x: 0, y: 0 }, { x: 0, y: 0 });
  for (var i = 0, n = targetPaths.length; i < n; i++) {
    // X轴相交的位置
    if (targetPaths[i].x == o.x) {
      paths[0] = { x: targetPaths[i].x, y: targetPaths[i].y };
    }

    // Y轴相交的位置
    if (targetPaths[i].y == o.y) {
      paths[1] = { x: targetPaths[i].x, y: targetPaths[i].y };
    }
  }

  return paths;
}

// 检查两点间的线是否可连
// A点必须为空
// B点可以不为空
function checkTwoLine(A, B, matrix) {
  // 如果是同一行
  if (A.x == B.x) {
    for (var i = A.y; A.y < B.y ? i < B.y : i > B.y; A.y < B.y ? i++ : i--) {
      if (!matrix.isWalkableAt(A.x, i)) {
        return false;
      }
    }
  }
  // 如果是同一列
  else {
    for (var i = A.x; A.x < B.x ? i < B.x : i > B.x; A.x < B.x ? i++ : i--) {
      if (!matrix.isWalkableAt(i, A.y)) {
        return false;
      }
    }
  }

  return true;
}

// 检查两个点是否相邻
function checkAdjacent(A, B) {
  var directions = new Array(-1, 1, 1, -1);

  var len = directions.length;
  for (var i = 0; i < len; i++) {
    if (A.x + directions[i] == B.x && A.y == B.y) {
      return true;
    }

    if (A.y + directions[i] == B.y && A.x == B.x) {
      return true;
    }
  }
  return false;
}
