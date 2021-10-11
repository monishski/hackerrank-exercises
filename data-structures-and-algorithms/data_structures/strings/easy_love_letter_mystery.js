function theLoveLetterMystery(s) {
  let count = 0
  let start = 0 
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) { //you dont see this if statement because if they are equal, they difference will be 0
      count += Math.abs(s[end].charCodeAt(0) - s[start].charCodeAt(0))
    } 
    start++; end--; 
  }
  return count 
}
