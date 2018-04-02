// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var n = nums.length;
  var smallSwap = -1;
  var largeSwap = -1;

  for (var i = n - 1; i >= 0; i--) {
    if (nums[i - 1] < nums[i]) {
      smallSwap = i - 1;
      largeSwap = i;
      break;
    }
  }

  if (smallSwap !== -1) {
    for (var j = largeSwap + 1; j < n; j++) {
      if (nums[smallSwap] < nums[j] && nums[largeSwap] >= nums[j]) {
        largeSwap = j;
      }
    }

    swap(nums, smallSwap, largeSwap);
  }

  n--
  for (var k = smallSwap + 1; k < n; k++, n--) {
    var toSwap = nums[k];

    nums[k] = nums[n];
    nums[n] = toSwap;
  }
};

function swap(nums, idx1, idx2) {
  var toSwap = nums[idx1];

  nums[idx1] = nums[idx2];
  nums[idx2] = toSwap;
}

// var array = [1, 2, 1, 5, 4, 3, 3, 2, 1];
// var arr1 = [3, 2, 1]
// var arr2 = [1, 1]
// console.log(nextPermutation(array))
// console.log(nextPermutation(arr1))
// console.log(nextPermutation(arr2))



