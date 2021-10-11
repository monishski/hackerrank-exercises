function gameOfThrones(s) {
  let counter = {}
  for(let i = 0; i < s.length; i++) {
    if (!counter[s[i]]) {
      counter[s[i]] = 0
    }
    counter[s[i]]++
  }
  console.log(counter)
  let isValid;
  if (s.length % 2 === 0) { //all chars must be a mutliple of 2 if string has even length
    isValid = Object.values(counter).every(elem => elem % 2 === 0)
  } else { //n - 1 characters must be a multiple of 2 but 1 character can have a odd number of charactecters
    // console.log(Object.values(counter).filter(x => x % 2 === 0))
    let counterEvens = Object.values(counter).filter(x => x % 2 === 0)
    isValid = counterEvens.length !== 0 ? counterEvens.every(elem => elem % 2 === 0) : false
  }
  return isValid ? 'YES' : 'NO'
}

//There is a very neat solution in the discussion
function gameOfThrones(s) {
  const l = new Set();
  s.split('').forEach(s => l.has(s) ? l.delete(s) : l.add(s)); 
  return l.size > 1 ? 'NO' : 'YES';
}