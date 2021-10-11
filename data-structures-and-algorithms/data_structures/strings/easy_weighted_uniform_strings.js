const weights = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((obj, elem, index) => Object.assign(obj, { [elem]: index + 1 }), {})

function _weightedUniformStrings(s, queries) {
  
  const substringsWeights = {}
  let substr = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i-1]) substr = '';
    substr += s[i]
    
    let weight = weights[substr[0]] * substr.length
    if (!substringsWeights[weight]) {
      substringsWeights[weight] = []
    }
    substringsWeights[weight].push(substr)
  }
  
  let result = []
  for (const query of queries) {
    if (query in substringsWeights) {
      result.push('Yes')
    } else {
      result.push('No')
    }
  }
  
  return result
}

//The above solution is not memory efficient...
function weightedUniformStrings(s, queries) {
  const weights = new Int32Array(10000000);
  let multiplier = 1
  let prev = '1'
  for(let i = 0; i < s.length; i++) {
    let weight = s[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    
    if (s[i] === prev) multiplier++;
    else multiplier = 1;

    weights[weight * multiplier] = 1 
    prev = s[i]
  }

  let results = []
  for(const query of queries) {
    !weights[query] ? 
      results.push('No') :
      results.push('Yes')
  }

  return results
}