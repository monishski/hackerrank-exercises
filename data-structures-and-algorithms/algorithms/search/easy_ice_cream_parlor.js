function icecreamParlor(m, arr) {
  let hash = {}
  for(let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] !== undefined) {
      return [+hash[arr[i]] + 1, i + 1]
    } else {
      hash[m - arr[i]] = i 
    }    
  }
  return []
}