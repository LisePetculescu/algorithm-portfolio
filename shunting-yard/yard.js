import Queue from "./Queue.js";
import Stack from "./Stack.js";

function convertInfixToPostfix(infixString) {
  console.log("Infix string:", infixString);

  const tempInput = infixString.trim().split(" ");

  const inputQueue = new Queue();
  const outputQueue = new Queue();
  const operatorStack = new Stack();

  tempInput.forEach((element) => {
    inputQueue.enqueue(element);
  });

  const precedence = {
    "(": 4,
    ")": 4,
    "^": 3,
    "/": 2,
    "*": 2,
    "+": 1,
    "-": 1,
  };

  // While there is input left, keep going
  while (inputQueue.peek()) {
    const inputSymbol = inputQueue.dequeue();

    // IS AN OPERATOR
    if (isNaN(Number(inputSymbol))) {
      while (
        // If the operator stack isn't empty
        operatorStack.peek() &&
        // The top operator ISN'T start parenthesis
        operatorStack.peek().data != "(" &&
        // AND the top operator has higher OR equal precedence to the new one
        precedence[operatorStack.peek().data] >= precedence[inputSymbol] &&
        // AND the new operator is "left-associative" (it reads from left to right)
        // Exponentiation is the only right-associative operator (reading from right to left)
        inputSymbol != "^"
      ) {
        // Remove the top operator, access it's data and put it in the output queue
        const topOperator = operatorStack.pop().data;
        outputQueue.enqueue(topOperator);
      }
      // Finally, push the new operator to the operator stack

      if (inputSymbol == ")") {
        while (operatorStack.peek() && operatorStack.peek().data != "(") {
          const topOperator = operatorStack.pop().data;
          outputQueue.enqueue(topOperator);
        }
        // The top operator is a left parenthesis since we exited the while loop!
        // ... or the list is empty and it's an invalid argument, but it still shouldn't crash the program
        operatorStack.pop();
      } else {
        operatorStack.push(inputSymbol);
      }
    }
    // IS A NUMBER
    else {
      outputQueue.enqueue(inputSymbol);
    }
  }

  while (operatorStack.peek()) {
    const leftOverOperator = operatorStack.pop();
    if (leftOverOperator.data != "(") {
      outputQueue.enqueue(leftOverOperator.data);
    }
  }

  console.log("Postfix string:");
  outputQueue.dumpList();
}

// convertInfixToPostfix("( 1 + 2 ) ^ 2");
// convertInfixToPostfix("1 + 2 * 4 - 3");
convertInfixToPostfix("5 - 2 * 3 + 3 ^ 4");
// convertInfixToPostfix("( 1 + 2 )");
