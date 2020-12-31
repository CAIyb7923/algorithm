/**
 * 寻找二叉搜索树中两个指定节点的最近公共祖先
 * @param {TreeNode} root 二叉搜索树的根节点
 * @param {TreeNode} p 节点
 * @param {TreeNode} q 节点
 * @returns {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  let pt = root;
  while (true) {
    if (pt.val > p.val && pt.val > q.val) {
      pt = pt.left;
    } else if (pt.val < p.val && pt.val < q.val) {
      pt = pt.right;
    } else {
      break;
    }
  }

  return pt;
}

/**
 * 树节点
 * @param {any} val 节点值
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}