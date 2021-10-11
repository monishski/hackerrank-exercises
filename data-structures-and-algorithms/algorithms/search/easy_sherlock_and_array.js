function _balancedSums(arr) { //this is too slow, does not pass all cases
  if (arr.length === 1) return 'YES'
  
  let leftSum = 0, rightSum = 0
  const leftSums = [], rightSums = []
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i-1] || 0
    leftSums.push(leftSum)
    rightSum += arr[(arr.length - i - 1) + 1] || 0    
    rightSums.unshift(rightSum)
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (leftSums[i] === rightSums[i]) {
      return 'YES'
    }
  }  
  return 'NO'
  
}

//note leftSum + rightSum + curr = total (but we are looking for leftSum = rightSum)
function balancedSums(arr) { //this is too slow, does not pass all cases
  if (arr.length === 1) return 'YES'
  
  let sum = 0
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  
  let leftSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (2 * leftSum + arr[i] === sum) {
      return 'YES'
    }
    leftSum += arr[i]
  }
  
  return 'NO'
}