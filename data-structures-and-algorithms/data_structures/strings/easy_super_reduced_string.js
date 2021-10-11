function superReducedString(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i-1]) {
      s = s.substring(0, i-1) + s.substring(i+1)
      i = 0
    }
  }
  return s.length === 0  ? "Empty String" : s 
}
