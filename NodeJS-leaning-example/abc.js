function evaluateCircuit(expression) {
  const result = expression
    .replace(/\|/g, '"|"') 
    .replace(/!/g, '"!"') 
    .replace(/&/g, '"&"') 
    .replace(/\s*,\s*/g, ",") 
    .replace(/\[/g, "[") 
    .replace(/\]/g, "]"); 

  const evaluate = (result) => {
    const parsedObj = eval(result);
    if (!Array.isArray(parsedObj)) {
      if (typeof parsedObj === "number") {
        return parsedObj;
      }
      console.log("Invalid input:", parsedObj);
      return;
    }

    const [operator, ...operands] = parsedObj;

    switch (operator) {
      case "!":
        if (operands.length !== 1) {
          console.log("NOT operator accept only one operand");
        }
        return evaluate(operands[0]) === 1 ? 0 : 1;

      case "&":
        return operands.every((e) => evaluate(e) === 1) ? 1 : 0;

      case "|":
        return operands.some((e) => evaluate(e) === 1) ? 1 : 0;

      default:
        console.log("unknown operator");
    }
  };

  return evaluate(result);
}
