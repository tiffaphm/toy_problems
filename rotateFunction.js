/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  var totalSum = 0;
  var max = 0;
  var F = 0;
  var n = A.length;

  for (var i = 0; i < n; i += 1) {
    totalSum += A[i];
    F += i * A[i]
  }

  max = F;

  for (var k = 1; k < n; k += 1) {
    F = F + totalSum - n * A[n - k]
    max = Math.max(max, F)
  }

  return max;
};


var array = [4, 3, 2, 6]

console.log(maxRotateFunction(array))