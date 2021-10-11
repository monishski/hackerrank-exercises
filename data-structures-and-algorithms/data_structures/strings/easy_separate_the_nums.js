function separateNumbers(s) {
  if (!+s[0]) return "NO";
  
  let starts = []
  let temp = ''
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    temp += s[i]
    starts.push(temp)
  }  
  
  for (const start of starts) {
    let curr = start //store it in 'curr' to avoid confusion... as it will be updated
    //no need to convert to int then string again but just keeping 'i' consistent with 'j'
    let i = ((BigInt(curr))+'').length //start index
    let j = ((BigInt(curr)+1n)+'').length //increment
    while (BigInt(curr)+1n == s.slice(i, i+j)) {
      curr = s.slice(i, i+j)
      i += ((BigInt(curr))+'').length  
      j = ((BigInt(curr)+1n)+'').length
    }    
    if (i === s.length) {
      return `YES ${start}`;
    }
  }
  return "NO"
}
