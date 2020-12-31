/**
 * 鸡尾酒排序
 * 优点：在大部分元素已经有序的情况下，能够减少排序的回合数
 * 缺点：增加了代码量
 * @param {array} arr 待排序数组
 * @returns {array}
 */
function cocktailSort(arr) {
  for (let i = 0; i < (arr.length / 2); i++) {
    let isSorted = true;

    // 奇数轮，从左向右比较和交换
    for (let j = i; j < (arr.length - 1 - i); j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }

    if (isSorted) {
      return arr;
    }

    // 偶数轮，从右向左比较和交换
    isSorted = true;
    for (let j = (arr.length - 1 - i); j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        isSorted = false;
      }
    }

    if (isSorted) {
      return arr;
    }
  }

  return arr;
}