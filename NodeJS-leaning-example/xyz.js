 
function circuitsOutput(circuitsExpression) {

    const output = [];
    for (const expression of circuitsExpression) {
      const stack = [];
      const elements = expression.replaceAll(/[, ]/g, "");
      for (const element of elements) {
        if (element === "]") {
          const temp = [];
          while (stack.length > 0 && stack[stack.length - 1] !== "[") {
            temp.push(stack.pop());
          }
          stack.pop();
          let value;
          if (temp.length === 2) {
            value = evaluateGateOperation(temp[1], temp[0]);
          } else if (temp.length > 2) {
            const operator = temp.pop();
            value = evaluateGateOperation(operator, temp);
          }
          stack.push(value);
        } else {
          stack.push(element);
        }
      }
      output.push(stack[0]);
    }
    return output;
  }
  function evaluateGateOperation(operator, value) {
    let result;
    if (operator === "&") {
      result = value.reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) && parseInt(currentValue)
      );
    } else if (operator === "|") {
      result = value.reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) || parseInt(currentValue)
      );
    } else if (operator === "!") {
      result = !parseInt(value);
    }
    return result ? 1 : 0;
  }
   