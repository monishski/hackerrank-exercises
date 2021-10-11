function _twoStrings(s1, s2) { //let s2 be the longer string
  if (s1.length > s2.length) {
    [s1, s2] = [s2, s1];
  }
  for (let i = 0; i <= s1.length; i++) {
    let index = s2.indexOf(s1[i])
    if (index !== -1) {
      return 'YES' //i.e. there is at least 1 letter which is contained in the other string
    }
  }
  //You can write all of the above logic as
  // for (const letter of s1) {
  //   if (s2.includes(letter)) return 'YES';
  // }
  return 'NO'
}

//The above solution is O(N^2)... Maps can make it O(n)
function twoStrings2(s1, s2) {
  const map = {};
  for (let i of s1) {
    map[i] = 1;
  }
  for (let i of s2) {
    if (map[i]) return "YES";
  }
  return "NO";
}