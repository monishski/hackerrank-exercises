function _getMax(operations) {
  let maxs = []
  let stack = []
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].match(/1\s/)) {
      let [operation, value] = operations[i].split(' ')
      stack.push(+value)
    } else if (operations[i] === '2') {
      stack.pop()
    } else if (operations[i] === '3') {
      maxs.push(Math.max(...stack))
    }
  }
  return maxs
}

//The solution above works but its naive
//The solution below (based on discussions) has O(1) access to get the maximum value in the stack
//We do this by creating a stack of maximum values at that point in time
const getMax = operations => {
  let max = Number.NEGATIVE_INFINITY;
  let maxs = []
  let stack = [];
  
  for(let i = 0; i < operations.length; i++) {
    if (operations[i].match(/1\s/)) {
      let [_, value] = operations[i].split(' ')
      max = Math.max(+value, max) //the trick is here
      stack.push(max)
    } else if (operations[i] === '2') {
      stack.pop() //assuming the list will be never empty when we pop
      if (stack.length === 0) { //this is importatnt because if the stack is empty we must reset the max to -inf
        max = Number.NEGATIVE_INFINITY
      } else { // otherwise reset max to the previous max!
        max = stack[stack.length-1]
      }
    } else if (operations[i] === '3') {
      maxs.push(stack[stack.length-1]) 
    }
  }
  return maxs
}