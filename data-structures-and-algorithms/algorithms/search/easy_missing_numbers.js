function missingNumbers(arr, brr) {

  let store = {} 
  for (let i = 0; i < brr.length; i++) {
    store[brr[i]] = store[brr[i]] + 1 || 1
  }
  
  let result = []
  for (let i = 0; i < arr.length; i++) {   
    if (store[brr[i]] === undefined) {
      result.push(arr[i])
    } else {
      store[arr[i]]--
    }
  }

  for (const [key, val] of Object.entries(store)) {
    if (val > 0) {
      result.push(key)
    } 
  }

  return result
}