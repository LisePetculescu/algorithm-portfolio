import Queue from "./Queue.js";
import Stack from "./Stack.js";

function RPNCalcer(inputString) {
  console.log("test");
  const input = inputString.split(" ");
  const resultStack = new Stack();
  const inputQueue = new Queue();
  // Convert array to queue
  input.forEach((inputter) => {
    const numberedVersion = Number(inputter);
    if (numberedVersion) {
      inputQueue.enqueue(numberedVersion);
    } else {
      inputQueue.enqueue(inputter);
    }
  });
  //   console.log(inputQueue);
  //   console.log("Size:", inputQueue.size());

  while (inputQueue.peek()) {
    const nextElement = inputQueue.dequeue();

    if (Number(nextElement)) {
      resultStack.push(nextElement);
    } else {
      doOperation(nextElement);
    }
  }

  function doOperation(operationSymbol) {
    // console.log("Operation:", operationSymbol);

    const firstElement = resultStack.pop().data;
    const secondElement = resultStack.pop().data;
    // console.log(firstElement);
    // console.log(secondElement);

    switch (operationSymbol) {
      case "^":
        resultStack.push(Math.pow(secondElement, firstElement));
        break;
      case "/":
        resultStack.push(secondElement / firstElement);
        break;
      case "*":
        resultStack.push(secondElement * firstElement);
        break;
      case "-":
        resultStack.push(secondElement - firstElement);
        break;
      case "+":
        console.log("Adding two numbers");

        resultStack.push(secondElement + firstElement);
        break;
    }
  }
  console.log(resultStack.peek());
}

RPNCalcer("2 3 4 / -"); // should be 1.25
RPNCalcer("2 3 4 ^ -"); // -79
RPNCalcer("2 3 4 * +"); // 14
RPNCalcer("2 3 4 * -"); // -10
