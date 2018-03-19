/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  var inverseIndex = -1;
  var nums = (N + '').split('');

  for (var i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] < nums[i - 1]) {
      nums[i - 1] = parseInt(nums[i - 1] - 1)
      inverseIndex = i;
    }
  }

  if (inverseIndex !== -1) {

    for (var j = inverseIndex; j < nums.length; j += 1) {
      nums[j] = 9;
    }
  }

  return parseInt(nums.join(''));
};

console.log(monotoneIncreasingDigits(100))