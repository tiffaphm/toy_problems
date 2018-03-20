var coinChange = function(coins, amount) {
  var solutions = [0];
  var MAX = Number.MAX_VALUE

  for (i = 1; i <= amount; i += 1) {
    solutions[i] = MAX;
  }


  for (i = 1; i <= amount; i += 1) {
    for (j = 0; j < coins.length; j += 1) {
      if (coins[j] <= i) {
        var subRes = solutions[i - coins[j]]

        if (subRes !== MAX && subRes + 1 < solutions[i]) {
          solutions[i] = subRes + 1;
        }
      }
    }
  }

  return solutions[amount]
};

var coins = [357,239,73,52];
var change = 9832;

console.log(coinChange(coins, change))

