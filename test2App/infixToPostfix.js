function toPostfix(infix) {
  // Convert infix to postfix here, and return result.
  let postfix = "";
  let stack = ["$"];
  let char = "";
  console.log(infix);
  [...infix].forEach((element) => {
    if (isOperand(element)) {
      postfix += element;
    } else if (element === "(") {
      stack.push(element);
    } else if (element === ")") {
      char = stack.pop();
      while (char !== "(") {
        postfix += char;
        char = stack.pop();
      }
    } else {
      char = stack.pop();
      while (
        char !== "$" &&
        char !== "(" &&
        precedence(char) >= precedence(element)
      ) {
        if (char == "^" && element == "^") {
          break;
        } else {
          postfix += char;
          char = stack.pop();
        }
      }
      stack.push(char);
      stack.push(element);
    }
  });
  char = stack.pop();
  while (char !== "$" && char != undefined) {
    postfix += char;
    char = stack.pop();
  }
  return postfix;
}

function isOperand(char) {
  return Number(char >= 0) && Number(char) <= 9;
}

function precedence(char) {
  switch (char) {
    case "(":
    case ")":
      return 4;
    case "^":
      return 3;
    case "*":
    case "/":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return -1;
  }
}

console.log(toPostfix("3*3/(7+1)"));
