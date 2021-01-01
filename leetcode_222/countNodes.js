/**
 * 统计完全二叉树的个数
 * @param {TreeNode} root 完全二叉树的根节点
 * @returns {number}
 */
var countNodes = function(root) {
  const nodeQueue = [];
  // 如果根节点为空
  if (!root) {
      return 0;
  }

  // 必需
  nodeQueue.push(root);

  /**
   * 如果存在，将节点的左、右节点加入队列
   * @param {TreeNode} node 树的根节点
   * @param {array} queue 队列
   */
  const pushNodeIntoQueue = function(node, queue) {
      if (node && node.left && Array.isArray(queue)) {
          queue.push(node.left);
          // 递归调用
          pushNodeIntoQueue(node.left, nodeQueue);
      }
      if (node && node.right && Array.isArray(queue)) {
          queue.push(node.right);
          // 递归调用
          pushNodeIntoQueue(node.right, nodeQueue);
      }
  };

  // 先对树的根节点调用函数
  pushNodeIntoQueue(root, nodeQueue);

  return nodeQueue.length;
};
