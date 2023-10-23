function calculateExpression(expression) {
  let tokens = expression.match(/(\d+\.\d+|\d+|[-+*/])/g);
  if (!tokens) {
    throw new Error("Invalid expression");
  }

  let elms = tokens.map((a) => {
    if ("*-+/".includes(a)) {
      return a;
    } else {
      return parseFloat(a);
    }
  });

  for (let i = 0; i < elms.length; i++) {
    if (elms[i] === "*") {
      elms[i - 1] = elms[i - 1] * elms[i + 1];
      elms.splice(i, 2);
      i--;
    } else if (elms[i] === "/") {
      elms[i - 1] = elms[i - 1] / elms[i + 1];
      elms.splice(i, 2);
      i--;
    }
  }

  for (let i = 0; i < elms.length; i++) {
    if (elms[i] === "+") {
      elms[i - 1] = elms[i - 1] + elms[i + 1];
      elms.splice(i, 2);
      i--;
    } else if (elms[i] === "-") {
      elms[i - 1] = elms[i - 1] - elms[i + 1];
      elms.splice(i, 2);
      i--;
    }
  }
  console.log(elms);
}

// const mathString = "3 + 5 * 2 - 6 / 2";
// calculateExpression(mathString);

calculateExpression("12 + 22 * 3 / 6 +22-13");
