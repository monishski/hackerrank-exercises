function minimumNumber(n, password) {
  let containsSixChar = n > 6 
  let containsDigit = /[0-9]/g.test(password)
  let containsLowerCase = /[a-z]/g.test(password) 
  let containsUpperCase = /[A-Z]/g.test(password) 
  let containsSpecialChar = /[!@#$%^&*()\-+ ]/g.test(password)
    
  let nMissingChar = !containsDigit + !containsLowerCase + !containsUpperCase + !containsSpecialChar
  console.log(password, nMissingChar)
  
  //return Math.max(nMissingChar, 6 - n)
  if (n + nMissingChar < 6) {
    return (6 - n - nMissingChar) + nMissingChar //or just 6-n !
  }
  return nMissingChar
}