function camelcase(s) {
  let count = 1
  for(let i = 0; i < s.length; i++) {
    //if (s[i] === s[i].toUpperCase()) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
      count++
    }
  }
  return count
}