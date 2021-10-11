function anagram(s) {
  let mid = Math.floor(s.length / 2) 
  if (s.length % 2 !== 0) return -1;
  let [left, right] = [s.substring(0, mid), s.substr(mid)]
  
  let count = 0;
  // let _left = left.split('')
  for (let i = mid - 1; i >=0 ; i--) {
    // const index = _left.indexOf(right[i]) 
    // if (index !== -1) _left.splice(index, 1);
    const index = left.indexOf(right[i]) //instead of using arrays just rebuild left
    if (index !== -1) left = left.substring(0, index) + left.substr(index + 1);
    else count ++;
  }
  return count
}