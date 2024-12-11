// ******** SHIFT **********

export default function insertionSortSwap(array) {
  // go through all elements in array
  // outer loop checks if array is sorted else call inner loop
  // key = current value, i = index outer loop, j = index inner loop
  let iterations = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      iterations++;
      const current = array[j];
      const prev = array[j - 1];
      if (current < prev) {
        // swap the two values
        array[j] = prev;
        array[j - 1] = current;
        // console.log("swap prev and current", prev, current);
      }
    }

    // console.log(array);
  }
  console.log("iterations:", iterations);

  return array;
}
