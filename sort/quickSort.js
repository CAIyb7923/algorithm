/**
 * 快速排序
 * 非递归实现
 * @param {array} arr 待排序数组
 * @param {number} startIndex 起始下标
 * @param {number} endIndex 结束下标
 * @returns {array}
 */
function quickSort(arr, startIndex, endIndex) {
  const quickSortStack = [];
  const rootParam = new Map();
  rootParam.set('startIndex', startIndex);
  rootParam.set('endIndex', endIndex);
  quickSortStack.push(rootParam);

  // 循环结束条件：栈为空时
  while(quickSortStack.length !== 0) {
    // 栈顶元素出栈，得到起止下标
    const param = quickSortStack.pop();

    // 得到基准元素位置
    const pivotIndex = partition(
      arr,
      param.get('startIndex'),
      param.get('endIndex')
    );

    // 根据基准元素分成两部分，把每一部分的起止下标入栈
    if (param.get('startIndex') < (pivotIndex - 1)) {
      const leftParam = new Map();
      leftParam.set('startIndex', param.get('startIndex'));
      leftParam.set('endIndex', pivotIndex - 1);
      quickSortStack.push(leftParam);
    }

    if ((pivotIndex + 1) < param.get('endIndex')) {
      const rightParam = new Map();
      rightParam.set('startIndex', pivotIndex + 1);
      rightParam.set('endIndex', param.get('endIndex'));
      quickSortStack.push(rightParam);
    }
  }

  return arr;
}

/**
 * 分治（单边循环法）
 * @param {array} arr 待排序数组
 * @param {number} startIndex 起始下标
 * @param {number} endIndex 结束下标
 * @returns {number}
 */
function partition(arr, startIndex, endIndex) {
  // 取第一个元素作为基准元素
  const pivot = arr[startIndex];
  let mark = startIndex;

  for (let i = (startIndex + 1); i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark ++;
      [arr[mark], arr[i]] = [arr[i], arr[mark]];
    }
  }

  arr[startIndex] = arr[mark];
  arr[mark] = pivot;

  return mark;
}
