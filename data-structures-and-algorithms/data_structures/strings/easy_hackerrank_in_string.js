function _hackerrankInString(s) {
  let hackerrank = ['k', 'n', 'a', 'r', 'r', 'e', 'k', 'c', 'a', 'h']
  for (let i = 0; i < s.length; i++) {
    if (s[i] === hackerrank[hackerrank.length-1]) {
      hackerrank.pop()
    }
  }
  return hackerrank.length === 0 ? 'YES' : 'NO' 
}

//This is one of the solutions from the discussions
function hackerrankInString(s) {
  let hackerrank = "hackerrank";
  if (s.length < hackerrank.length) return "NO";
  let j = 0;
  for (let i = 0; i < s.length; i++) {
      if (j < hackerrank.length && s[i] == hackerrank[j]) j++;
  }
  return j == hackerrank.length ? "YES" : "NO";
}
