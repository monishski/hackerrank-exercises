const encrypt = (k, upper) => {
  const _k = k % 26
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const s = upper ? alphabet.toUpperCase() : alphabet
  return s.substring(_k, s.length) + s.substring(0, _k)
}

function _caesarCipher(s, k) {
  const encryptionLowerCase = encrypt(k, false)
  const encryptionUpperCase = encrypt(k, true)
  let cipher = ""
  for(const char of s) {
    if (/[a-z]/g.test(char)) {
      cipher += encryptionLowerCase[char.charCodeAt(0) - 'a'.charCodeAt(0)]
    } else if (/[A-Z]/g.test(char)) {
      cipher += encryptionUpperCase[char.charCodeAt(0) - 'A'.charCodeAt(0)]      
    } else {
      cipher += char
    }
  }  
  return cipher
}

//Basically, you dont need to go through the hastle of using substring etc...
function caesarCipher(s, k) {
  let cipher = ""
  for (const char of s) {
    if (/[a-zA-Z]/.test(char)) {
      const offset = /[a-z]/.test(char) ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)
      cipher += String.fromCharCode(offset + (char.charCodeAt(0) + k - offset) % 26)
    } else {
      cipher += char
    }
  }
  return cipher
}