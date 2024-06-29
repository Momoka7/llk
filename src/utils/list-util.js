function createRangeRandomList(n) {
  let list = [...Array(n).keys()];
  list = shuffleArray(list);
  return list;
}
function flatten2DArray(array) {
  return array.flat();
}

function reshapeArray(array, rows, cols) {
  let reshapedArray = [];
  for (let i = 0; i < rows; i++) {
    reshapedArray.push(array.slice(i * cols, i * cols + cols));
  }
  return reshapedArray;
}

function shuffle2DArray(array) {
  const rows = array.length;
  const cols = array[0].length;

  // 展平成一维数组
  let flatArray = flatten2DArray(array);

  // 打乱一维数组
  let shuffledFlatArray = shuffleArray(flatArray);

  // 将打乱的一维数组重新转换回二维数组
  return reshapeArray(shuffledFlatArray, rows, cols);
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function padding2DArray(array, padding) {
  let expandedArray = [];
  let row = array.length + padding * 2;
  let col = array[0].length + padding * 2;
  let emptyRow = new Array(col).fill(0);
  for (let i = 0; i < padding; i++) expandedArray.push(emptyRow.slice());
  for (let i = 0; i < array.length; i++) {
    let paddingRow = new Array(padding).fill(0);
    let expandedRow = [...paddingRow, ...array[i], ...paddingRow];
    expandedArray.push(expandedRow);
  }
  for (let i = 0; i < padding; i++) expandedArray.push(emptyRow.slice());
  return expandedArray;
}

export { shuffle2DArray, padding2DArray };
