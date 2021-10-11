function makingAnagrams(s1, s2) { //we want s2 always to be the shorter string 
  if (s1.length < s2.length) {
    [s1, s2] = [s2, s1];
  } 
  let count = 0
  for(let i = 0; i <= s2.length; i++) {
    let index = s1.indexOf(s2[i])
    if (index !== -1) {
      count++
      s1 = s1.substring(0, index) + s1.substr(index + 1)
    }
  } 
  return s1.length + s2.length - count
}
