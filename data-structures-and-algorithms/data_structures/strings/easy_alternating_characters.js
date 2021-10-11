function alternatingCharacters(s) {
  let count = 0 //I had the same but cleaned it up
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i+1]) count++;
  }
  return count
}