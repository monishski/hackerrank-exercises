// Based on a solution from the discussions
function makeAnagram(a: string, b: string): number {
  const freq = new Array(26).fill(0)
  for (let i = 0; i < a.length; i++) {
    freq[a[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  for (let i = 0; i < b.length; i++) {
    freq[b[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
  }
  return freq.reduce((sum, val) => sum += Math.abs(val), 0)
}

function _makeAnagram(a: string, b: string): number {
  const _a = sort(a)
  const _b = sort(b)
  
  let i = 0, j = 0 
  let deletions = 0
  while (i < _a.length && j < _b.length) {
    
    if (_a[i].charCodeAt(0) === _b[j].charCodeAt(0)) {
      i++; j++
    } else if (_a[i].charCodeAt(0) > _b[j].charCodeAt(0)) {
      j++
      deletions++
    } else {
      i++
      deletions++
    }
    
    if (i === _a.length) {
      deletions += _b.length - j
      break;
    } else if (j === _b.length) {
      deletions += _a.length - i
      break;
    }
  }
  
  return deletions
}

const sort = (str: string): string => {
  return str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
}
