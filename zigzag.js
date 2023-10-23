function convert(s, numRows) {
  if (s.length < numRows) return s;
  if (numRows === 1) return s;

  let arr = Array(numRows).fill("");
  let way = 1;
  let row = 0;

  for (let cr of s.split("")) {
    arr[row] += cr;
    row += way;
    if (row === numRows - 1) {
      way = -1;
    }
    if (row === 0) {
      way = 1;
    }
  }
  return arr.join("");
}

console.log(convert("denemebirikiuc", 4));
