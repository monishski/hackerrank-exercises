// Intersection of 2 strings is something work keeping in mind
// https://stackoverflow.com/questions/1723168/what-is-the-fastest-or-most-elegant-way-to-compute-a-set-difference-using-javasc
function gemstones(arr) {
  let minerals = new Set(arr[0])
  for (let i = 1; i < arr.length; i++) {
    minerals = new Set([...minerals].filter(x => (new Set(arr[i])).has(x)));
  }
  return minerals.size
}

//There is another solution in the discussions
function _gemstones(arr) {
  let counter = 0
  for(let i = 97; i <=  122; i++) {
    if (arr.every(elem => elem.includes(String.fromCharCode(i)))) {
      counter++
    }
  }
  return counter
}