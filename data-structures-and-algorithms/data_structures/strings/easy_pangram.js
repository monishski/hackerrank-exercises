function pangrams(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((obj, elem) => Object.assign(obj, { [elem]: 0 }), {}) 
  let _s = s.toLowerCase()
  for (let i = 0; i < _s.length; i++) {
    if (_s[i] !== ' ') alphabet[_s[i]]++;
  }
  const isPagram = Object.values(alphabet).every(elem => elem >= 1) 
  return isPagram ? 'pangram' : 'not pangram'
  // This works but you could have used a Set instead and the only thing to check is whether you have 26 characters in the end
  // return new Set(s.toLowerCase()).size > 26 ? "pangram":"not pangram";
}