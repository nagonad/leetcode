const brack = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const ess = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

let ri = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i).length > 0 && ri[s.slice(i, i + 2)]) {
      sum += ri[s.slice(i, i + 2)];
      i++;
    } else {
      sum += ri[s[i]];
    }
  }
  return sum;
};

romanToInt("MCMXCIV");

var intToRoman = function (num) {
  let str = "";
  for (let i = 0; i < brack.length; i++) {
    while (num >= brack[i]) {
      str += ess[i];
      num -= brack[i];
    }
  }
  return str;
};
