/**
 * 第1046题 最后一块石头的重量
 * @param {array} stones 石头重量的数组
 * @returns {number}
 */
function lastStoneWeight(stones) {
  // 排序函数
  const func = (a, b) => a - b;

  // 数组先按升序排序
  const arr = stones.sort(func);

  // 当数组中有2个以上的石头时
  while (arr.length > 1) {
    // 取出最大的两块
    const max = arr.pop();
    const second = arr.pop();

    // 如果存在重量差
    if (max > second) {
      // 将差值加入数组
      arr.push(max - second);

      // 重新排序
      arr.sort(func);
    }
  }

  // 如果还剩一块石头，返回石头的重量
  if (arr.length > 0) {
    return arr[0];
  }

  return 0;
}
