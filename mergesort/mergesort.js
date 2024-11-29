let mergeSortCalls = 0;
let mergeLoops = 0;

function merge(arrayA, arrayB) {
  let arrayC = [];
  let currentA = 0;
  let currentB = 0;

  while (currentA < arrayA.length && currentB < arrayB.length) {
    mergeLoops++;
    if (arrayA[currentA] < arrayB[currentB]) {
      arrayC.push(arrayA[currentA]);
      currentA++;
    } else {
      arrayC.push(arrayB[currentB]);
      currentB++;
    }
  }

  // add possible leftovers from arrayA to arrayC
  while (currentA < arrayA.length) {
    mergeLoops++;
    arrayC.push(arrayA[currentA]);
    currentA++;
  }

  // add possible leftovers from arrayB to arraC
  while (currentB < arrayB.length) {
    mergeLoops++;
    arrayC.push(arrayB[currentB]);
    currentB++;
  }

  return arrayC;
}

export default function mergeSort(array) {
  mergeSortCalls++;

  if (array.length <= 1) {
    console.group(`mergeSort call: ${mergeSortCalls}`);
    console.log("Base case reached with array: ", array);
    console.groupEnd();
    return array;
  }

  let mid = Math.floor(array.length / 2);
  const arrayA = array.slice(0, mid);
  const arrayB = array.slice(mid);

  console.group(`mergeSort call: ${mergeSortCalls}`);
  console.log("Length of array: ", array.length);
  console.log("Array A: ", arrayA);
  console.log("Array B: ", arrayB);

  const sortedArrayA = mergeSort(arrayA);
  const sortedArrayB = mergeSort(arrayB);

  console.groupEnd();

  return merge(sortedArrayA, sortedArrayB);
}

function logFinalCounts() {
  console.log("Merge Sort Calls:", mergeSortCalls);
  console.log("Merge Loops:", mergeLoops);
}

export { mergeSort, logFinalCounts };
