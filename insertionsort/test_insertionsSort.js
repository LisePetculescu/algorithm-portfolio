import insertionSortSwap from "./insertionsSort.js";

export default function testInsertionSortSwap() {
  console.log("****** Test InsertionSort Swap ******");

  const list = [];

  for (let i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random() * 100));
  }
  //   const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6,5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

  insertionSortSwap(list);

  console.log(list);
}
