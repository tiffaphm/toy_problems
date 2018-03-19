
var NumArray = function(nums) {
  this.nums = nums;
  this.memo = [nums[0]];

  for (var i = 1; i < nums.length; i += 1) {
    this.memo[i] = this.memo[i - 1] + nums[i]
  }
};

NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.memo[j];
  }

  return this.memo[j] - this.memo[i - 1]
};