/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var findDepth = function(root) {
  if (root === null) {
    return 0;
  }

  var leftDepth = findDepth(root.left);

  if (leftDepth === -1) {
    return -1;
  }

  var rightDepth = findDepth(root.right);

  if (leftDepth === -1) {
    return -1;
  }

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }

  return Math.max(leftDepth, rightDepth) + 1;
};

var isBalanced = function(root) {
  return findDepth(root) !== -1;
}


// class solution {
// public:
// int dfsHeight (TreeNode *root) {
//         if (root == NULL) return 0;

//         int leftHeight = dfsHeight (root -> left);
//         if (leftHeight == -1) return -1;
//         int rightHeight = dfsHeight (root -> right);
//         if (rightHeight == -1) return -1;

//         if (abs(leftHeight - rightHeight) > 1)  return -1;
//         return max (leftHeight, rightHeight) + 1;
//     }
//     bool isBalanced(TreeNode *root) {
//         return dfsHeight (root) != -1;
//     }
// };