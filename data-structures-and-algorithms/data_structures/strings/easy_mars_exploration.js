function marsExploration(s) {
  let match = 'SOS'
  let count = 0 
  for (let i = 0; i < s.length; i = i + 3) {
    for (let j = 0; j < 3; j++) {
      if (match[j] !== s[i+j]) count++;
    } 
  }
  // You don't need 2 loops
  // for (let i = 0; i < s.length; i++) {
  //   if (s.charAt(i) !== match.charAt(i % 3)) count++;
  // }
  return count
}
