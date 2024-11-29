// source: https://www.geeksforgeeks.org/pigeonhole-sort/
/*
Big-O time complexity:
O(n + range) -->
n = amount of numbers/elements
range = difference between max and min + 1 

This sorting algorithm is good when n and range are close to each other,
but if range becomes too big compared to n it isn't efficient anymore
*/
export default function pigeonholeSort(array) {
  let min = 0;
  let max = 0;
  let range = 0;

  // check for array
  if (!array) {
    return "No array found.";
  }
  // find min lowest number in array
  // find max = largest number in array
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current < min) {
      min = current;
    } else if (current > max) {
      max = current;
    }
  }
  // calculate range
  range = max - min + 1;

  // Setting up an array of initially empty “pigeonholes” the same size as of the range.
  let pigeonholes = Array(range)
    .fill()
    .map(() => []);
  console.log("number of needed Pigeonholes: ", range);
  console.log("Number of Pigeonholes:", pigeonholes.length);

  // go through array and  add each different number to it's pigeonhole
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let pigeonholeIndex = current - min;
    pigeonholes[pigeonholeIndex].push(current);
  }

  console.log("Numbers in their pigeonholes: ", pigeonholes);

  // combine the pigeonholes-arrays to get the sorted array
  let sortedArray = [].concat(...pigeonholes);

  console.log("Sorted Array:", sortedArray);

  // // Loop over each number in each pigeonholes-array and add the numbers to the sorted array
  //   let sortedArray = [];
  //   for (let p = 0; p < pigeonholes.length; p++) {
  //     for (let n = 0; n < pigeonholes[p].length; n++) {
  //       sortedArray.push(pigeonholes[p][n]);
  //     }
  //   }
  //   console.log("Sorted Array:", sortedArray);

  return sortedArray;
}
