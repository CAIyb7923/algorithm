/**
 * 冒泡排序
 * @param {array} array 待排序数组
 * @returns {array}
 */
function bubbleSort(array) {
  // 无序数组的边界，每次比较只需要比到这里
  let sortBorder = array.length - 1;

  // 记录最后一次交换的位置
  let lastExchangeIndex = 0;

  for (let i = 0; i < array.length - 1; i++) {
    // 有序标记，每一轮的初始值设为true
    let isSorted = true;

    for (let j = 0; j < sortBorder; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        
        // 存在元素交换,所以不是有序的
        isSorted = false;

        // 更新最后一次交换元素的位置
        lastExchangeIndex = j;
      }
    }

    // 每轮比较后，记录最后一次元素交换的位置，该位置之后的数组已经有序
    sortBorder = lastExchangeIndex;

    // 如果一轮下来没有元素交换，说明已经有序，跳出循环
    if (isSorted) {
      return array;
    }
  }

  return array;
}
