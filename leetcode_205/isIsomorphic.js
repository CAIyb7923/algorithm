/**
 * 第205题 同构字符串
 * @param {string} s 字符串
 * @param {string} t 字符串
 */
var isIsomorphic = function(s, t) {
  // 记录字符的映射关系
  const charMap = new Map();

  // 记录已经映射过的字符
  const charSet = new Set();
  const sArr = [...s];
  const tArr = [...t];

  for (let i = 0; i < sArr.length; i++) {
    // 当前s串中的字符
    const sChar = sArr[i];
    // 当前t串中的字符
    const tChar = tArr[i];

    // 如果t的字符与之前s串字符映射的字符不同
    if (charMap.has(sChar) && charMap.get(sChar) !== tChar) {
      return false;
    }

    if (!charMap.has(sChar)) {
      // 如果不同字符映射到同一个字符，返回false
      if (charSet.has(tChar)) {
        return false;
      }

      // 记录映射关系
      charMap.set(sChar, tChar);
      // 记录已经被使用的字符
      charSet.add(tChar);
    }
  }

  return true;
}