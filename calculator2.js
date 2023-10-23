function calculateExpression(expression) {
  let tokens = expression.match(/(\d+\.\d+|\d+|[-+*/()])/g);
  if (!tokens) {
    throw new Error("Invalid expression");
  }

  let elms = tokens.map((a) => {
    if ("*-+/()".includes(a)) {
      return a;
    } else {
      return parseFloat(a);
    }
  });

  return calc(elms);
}

function calc(elms) {
  for (let k = 0; k < elms.length; k++) {
    if (elms[k] === "(") {
      let arrr = elms.slice(0, k).concat(calc(elms.slice(k + 1)));
      elms = arrr;
    }
  }

  let newArr = [];
  let flag = false;
  let restArr = [];

  for (let j = 0; j < elms.length; j++) {
    if (elms[j] === ")") {
      newArr = elms.slice(0, j);
      restArr = elms.slice(j + 1);
      flag = true;
    }
  }
  if (!flag) {
    newArr = elms;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "*") {
      newArr[i - 1] = newArr[i - 1] * newArr[i + 1];
      newArr.splice(i, 2);
      i--;
    } else if (newArr[i] === "/") {
      newArr[i - 1] = newArr[i - 1] / newArr[i + 1];
      newArr.splice(i, 2);
      i--;
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "+") {
      newArr[i - 1] = newArr[i - 1] + newArr[i + 1];
      newArr.splice(i, 2);
      i--;
    } else if (newArr[i] === "-") {
      newArr[i - 1] = newArr[i - 1] - newArr[i + 1];
      newArr.splice(i, 2);
      i--;
    }
  }

  if (flag) {
    return newArr.concat(restArr);
  }
  return newArr;
}

console.log(calculateExpression("(12 + 22) * 3 / (6 +  22)-13 "));
