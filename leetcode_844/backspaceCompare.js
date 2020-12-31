/**
 * 比较含退格的字符串（栈）
 * @param {string} S 字符串
 * @param {string} T 字符串
 */
function backspaceCompare(S, T) {
  const s = getString(S);
  const t = getString(T);

  return s === t;
}

/**
 * 处理字符串，得到最后的输出
 * @param {string} str 待处理的字符串
 */
function getString(str) {
  const stack = [];
  for (const char of str) {
    if (char !== '#') {
      stack.push(char);
    } else {
      if (stack.length > 0) {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return '';
  }

  // join方法默认使用','作为分隔符，所以需要指定空字符串作为字符串
  return stack.join('');
}