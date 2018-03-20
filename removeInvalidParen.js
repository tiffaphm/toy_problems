/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  var paren = ['(', ')'];
  var result = [];

  removeParen(s, 0, 0, paren, result)

  return result;
};

var removeParen = function(s, last_i, last_j, paren, result) {
  var count = 0;

  for (var i = last_i; i < s.length; i += 1) {
    if (s[i] === paren[0]) {
      count++
    } else if (s[i] === paren[1]) {
      count--
    }

    if (count < 0) {
      for (var j = last_j; j <= i; j += 1) {
        if (s[j] === paren[1] && (j === last_j || s[j - 1] !== paren[1])) {
          removeParen(s.substring(0, j) + s.substring(j + 1), i, j, paren, result)
        }
      }
      return;
    }
  }

  var reversed = s.split('').reverse().join('');
  if (paren[0] === '(') {
    removeParen(reversed, 0, 0, [')', '('], result)
  } else {
    result.push(reversed)
  }

}

console.log(removeInvalidParentheses('())'))