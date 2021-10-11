const memo = new Array(30 + 1).fill(0)

function fibonacci(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (memo[n] !== 0) return memo[n]
  let res = fibonacci(n - 1) + fibonacci(n - 2)
  memo[n] = res
  return res
}
