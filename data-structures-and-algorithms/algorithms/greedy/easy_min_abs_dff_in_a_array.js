function minimumAbsoluteDifference(arr) {
  arr.sort()
  let min = Math.min()
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i + 1]))
  }
  return min
}