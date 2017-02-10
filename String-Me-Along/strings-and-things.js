//String Me Along
//ghhiiii -> hhiiii
//efgefghiiikk -> iiikk

function findRepeats(str) {
  return str.match(/(.)\1{1,}/ig).join()
}

//console.log(findRepeats("efgefghiiikk"));

// /(.)\1{1,}/ig Regex for search criteria


function findLongUniq(str) {
  let strArr = str.split(' ')

      longest = strArr.sort(function(arr1, arr2){
        return arr2.length - arr1.length
      })

      return longest.join('').replace(',', '')
      //.join('')
}

console.log( findLongUniq(findRepeats('ghhiiii')) );
console.log( findLongUniq(findRepeats('efgefghiiikk')) );
