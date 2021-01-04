/**
 * 第260题 只出现一次的数字III
 * @param {number[]} nums 整数数组
 */
var singleNumber = function(nums) {
  const map = new Map();
  const ans = [];
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, 2);
    }
  }

  for (const [key, val] of map) {
    if (val === 1) {
      ans.push(key);
    }
  }

  return ans;
};
