function _equalStacks(h1, h2, h3) {
  if (!h1.length || !h2.length || !h3.length) return 0;
  let heights1 = stackHeight(h1)
  let heights2 = stackHeight(h2)
  let heights3 = stackHeight(h3)
  let equalHeights = intersection(intersection(heights1, heights2), heights3)
  return !equalHeights.size ? 0 : Math.max(...equalHeights)
}

const stackHeight = (stack) => {
  let height = 0;
  let set = new Set()
  while (stack.length > 0) {
    height += stack.pop()
    set.add(height)
  }
  return set
}

const intersection = (set1, set2) => new Set([...set1].filter(x => set2.has(x)))

//The above works but there is a neat solution in the discussion
const equalStacks = (h1, h2, h3) => { //note the stacks are in reverse order so you remove the first element i.e. .shift()
  if (!h1.length || !h2.length || !h3.length) return 0;

  let height1 = h1.reduce(sum, 0) //get largest height (could have use accumultor)
  let height2 = h2.reduce(sum, 0) 
  let height3 = h3.reduce(sum, 0)

  // while (true) {
  //   if (height1 === height2 && height1 === height3) return height1;
  //   if (height1 >= height2 && height1 >= height3) {
  //     height1 -= h1.shift();
  //   } else if (height2 >= height1 && height2 >= height3) {
  //     height2 -= h2.shift()
  //   } else {
  //     height3 -= h3.shift()
  //   }
  // }
  //The above logic could have also been written as follows:
  while (h1.length && h2.length && h3.length) {
    let m = Math.min(height1, height2, height3)
    while (height1 > m) { 
      height1 -= h1.shift()
    } 
    while (height2 > m) {
      height2 -= h2.shift()
    }
    while (height3 > m) {
      height3 -= h3.shift()
    }
    if (height1 == height2 && height2 == height3) {
      return height1
    }
  }
  return 0
}

const sum = (a, b) => a + b

// const cumulativeSum = (arr, elem, index) => [...arr, elem + (arr[index-1] || 0)], []
