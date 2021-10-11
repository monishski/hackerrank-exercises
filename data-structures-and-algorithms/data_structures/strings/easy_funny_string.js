function funnyString(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let left = s[i+1].charCodeAt(0) - s[i].charCodeAt(0)
    let right = s[s.length - i - 2].charCodeAt(0) - s[s.length - i - 1].charCodeAt(0)
    if (Math.abs(left) !== Math.abs(right)) return 'Not Funny';
  }
  return 'Funny'
}