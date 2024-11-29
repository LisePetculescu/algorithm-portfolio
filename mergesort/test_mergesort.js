import { mergeSort, logFinalCounts } from "./mergesort.js";

export function testMergeSort(unsortedArray) {
  if (!unsortedArray) {
    unsortedArray = [3, 1, 45, 4, 1, 5, 11, 9, 2, 6, 5, 7, 3, 5];
  }
  const sortedArray = mergeSort(unsortedArray);

  console.log("******** Merge Test ********");
  console.log("Sorted Array:", sortedArray);
  console.log("");

  //  final iteration counts after the sorting is complete
  logFinalCounts();
}

console.log(testMergeSort());

// const evenNum = [2, 4, 6, 8];
// const unevenNum = [1, 3, 5, 7, 9];

// export function merge(arrayA, arrayB) {
//   let arrayC = [];
//   let currentA = 0;
//   let currentB = 0;

//   //   console.log("arrayA: ", arrayA);
//   //   console.log("arrayB: ", arrayB);

//   if (!arrayA) {
//     arrayA = unevenNum;
//   }
//   if (!arrayB) {
//     arrayB = evenNum;
//   }

//   //   console.log("arrayA: ", arrayA);
//   //   console.log("arrayB: ", arrayB);

//   while (currentA < arrayA.length && currentB < arrayB.length) {
//     if (arrayA[currentA] < arrayB[currentB]) {
//       arrayC.push(arrayA[currentA]);
//       currentA++;
//     } else {
//       arrayC.push(arrayB[currentB]);
//       currentB++;
//     }
//   }

//   // add possible leftovers from arrayA to arrayC
//   while (currentA < arrayA.length) {
//     arrayC.push(arrayA[currentA]);
//     currentA++;
//   }

//   // add possible leftovers from arrayB to arraC
//   while (currentB < arrayB.length) {
//     arrayC.push(arrayB[currentB]);
//     currentB++;
//   }
//   return arrayC;
// }
// console.log("******** Merge Test ********");
// console.log(merge(evenNum, unevenNum));
// console.log("");
