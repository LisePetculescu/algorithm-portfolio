window.addEventListener("load", start);
import { testBinarySearch } from "./BinarySearch/test_binarysearch.js";
import testInsertionSortSwap from "./insertionsort/test_insertionsSort.js";
import { testMergeSort } from "./mergesort/test_mergesort.js";
import testPigeonholeSort from "./pigeonholesort/test_pigeonholeSort.js";

function start() {
  console.log("js is running");
  console.log("");

  // testBinarySearch();

  // testMergeSort([2, 7, 9, 11, 1, 4, 5, 1, 12, 7, 6]);

  testPigeonholeSort();

  // testInsertionSortSwap();
}
