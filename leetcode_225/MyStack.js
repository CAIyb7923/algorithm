/**
 * 用数组实现栈的基本操作
 */
var MyStack = function() {
  this.stack = [];
};

/**
 * 将元素压入栈顶
 * @param {number} x 待入栈元素
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * 弹出栈顶元素，返回该元素的值
 * @returns {number}
 */
MyStack.prototype.pop = function() {
  // 必须返回出栈的值
  return this.stack.pop();
};

/**
 * 返回栈顶元素
 * @returns {number}
 */
MyStack.prototype.top = function() {
  if (this.stack.length === 0) {
    return undefined;
  }

  const finalIndex = this.stack.length - 1;
  return this.stack[finalIndex];
};

/**
 * 判断栈是否为空
 * @returns {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length === 0;
};
