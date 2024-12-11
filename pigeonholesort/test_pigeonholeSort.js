import pigeonholeSort from "./PigeonholeSort.js";

export default function testPigeonholeSort() {
  const unsortedArray = [6, 2, 5, 9, 7, 3, 5, 3, 6, 7, 5];
  console.log("");
  console.log("******** Pigeonhole Sort *********");

  console.log("Small range sort: ");
  console.log("unsorted: ", unsortedArray);

  pigeonholeSort(unsortedArray);
  console.log("");

  const bigRangeUnsorted = [2, 99, 34, 1000, 765, 34, 1000, 2];
  console.log("Big range sort: ");
  console.log("unsorted: ", bigRangeUnsorted);

  pigeonholeSort(bigRangeUnsorted);
  console.log("");
}

// console.log(testPigeonholeSort());
