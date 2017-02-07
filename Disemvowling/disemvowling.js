let str = "Aaron"

function removeVows(str) { //I know 'vows' is spelled wrong...

  return str.replace(/[aeiouy\s]/g, '')
  //return "i am groot"...replace any vowels with '' == blank space "" b r i a n === brn
}

console.log(removeVows(str))
//Refactoring:
//user can enter any string
//change regex to include upper/lower case
