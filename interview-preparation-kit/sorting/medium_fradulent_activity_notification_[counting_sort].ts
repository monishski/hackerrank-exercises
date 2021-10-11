
function _activityNotifications(expenditure: number[], d: number): number {
  let notifications = 0
  for (let i = d; i < expenditure.length; i++) {
    let median = findMedian(expenditure.slice(i - d, i))
    if (expenditure[i] >= 2 * median) {
      notifications++
    }
  }
  return notifications
}

const findMedian = (arr: number[]): number => {
  arr.sort((a, b) => a - b)
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid + 1]) / 2
  } else {
    return arr[mid]
  }
}

// The above does not pass all tests and its naive
// The below is based on a solution from the discussions [See Counting Sort]
// https://www.geeksforgeeks.org/counting-sort/
// We dont actually end up sorting the values below
function activityNotifications(expenditure: number[], d: number): number {
  let n = 0 //notifications
  
  //First, lets find the mid-point indexes for finding the median
  const [leftIndex, rightIndex] = [Math.floor((d - 1)/2), Math.ceil((d - 1)/2)]
  let left, right, median;
  
  //Array for counting each of the expenditures (201 is the max as stated in the problem)
  const cs = new Array<number>(201).fill(0)
  for (let i = 0; i < d; i++) { //Only up to 'd' for first iteration
    cs[expenditure[i]]++
  }
  
  
  for (let i = d; i < expenditure.length; i++) {
    
    //remember cs[j]  is the count for j
    //so j WILL BE the value of the median e.g. for [2, 3, 4, 2, 3], cs = [0, 0, 2, 2, 1]
    // k <= leftIndex is checking if we have counted enough to 'gulf' the leftIndex
    for (let j = 0, k = 0; k <= leftIndex; k += cs[j], j++) {
      left = j //in the example above, we can see median is 3
    }
    median = left
    
    if (d % 2 === 0) { // 'd' is even (so median is NOT in the middle)
      for (let j = 0, k = 0; k <= rightIndex; k += cs[j], j++) {
        right = j //in the example above 
      }
      median = (left + right) / 2
    } 
    
    if (expenditure[i] >= 2 * median) n++
    
    cs[expenditure[i - d]]-- //remove/reduce the count of last value as it will no longer be part of the last 'd' values
    cs[expenditure[i]]++ //introduce the next value in the list
  }
  
  return n
  
}