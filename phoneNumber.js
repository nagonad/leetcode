let arr = [
  [],
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];
var letterCombinations = function (digits) {
  if (digits.length < 1) {
    return [];
  }
  return doo([], "", digits);
};

function doo(arrr, base, digits) {
  if (digits.length === 0) {
    if (base !== "") {
      arrr.push(base);
    }
    return;
  }
  let num = Number(digits[0]);
  let kucukArr = arr[num];
  for (let i = 0; i < kucukArr.length; i++) {
    doo(arrr, base + kucukArr[i], digits.substring(1));
  }
  return arrr;
}
