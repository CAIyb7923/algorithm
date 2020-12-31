/**
 * 给定字符串，找出其中不含有重复字符的最长子串的长度
 * @param {string} s 字符串
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
  // 记录每个字符是否出现过
  const occ = new Set();

  const n = s.length;

  // 右指针，初始值为-1，相当于在字符串左边界的左侧，还未开始移动
  let rk = -1;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }

    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断移动右指针
      occ.add(s.charAt(rk + 1));
      rk++;
    }
    // 第i到rk个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }

  return ans;
}