export default function binarySearchRecursive(search, values, start, end, iterations = 0, comparator) {
  iterations++;
  const middle = Math.floor((start + end) / 2);

  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else if ((a = b)) {
          return 0;
        } else {
          return a - b;
        }
      } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
      }
      return 0;
    };
  }

  const comparison = comparator(values[middle], search);
  console.log("comp: ", comparison);

  if (comparison === 0) {
    console.log(`Iterations success: ${iterations}`);
    console.log("middle: ", middle);

    return middle;
  } else if (start > end || comparison == undefined) {
    console.log(`Iterations failure: ${iterations}`);
    return -1;
  } else if (comparison < 0) {
    start = middle + 1;
  } else if (comparison > 0) {
    end = middle - 1;
  }

  return binarySearchRecursive(search, values, start, end, iterations, comparator);
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
binarySearchRecursive(1, sortedArray, 0, sortedArray.length - 1);
