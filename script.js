window.addEventListener("load", start);
import { testBinarySearch } from "./BinarySearch/test_binarysearch.js";
import { testMergeSort } from "./mergesort/test_mergesort.js";

function start() {
  console.log("js is running");

  testBinarySearch();

  testMergeSort([2, 7, 9, 11, 1, 4, 5, 1, 12, 7, 6]);
}
