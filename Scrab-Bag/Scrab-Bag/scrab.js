//Output how many of each of the remaining tiles are left in the stack
let fullStack = {

'A': 9, 'B': 2, 'C': 2,
'D': 4, 'E': 12,'F': 2,
'G': 3, 'H': 2, 'I': 9,
'J': 1, 'K': 1, 'L': 4,
'M': 2, 'N': 6, 'O': 8,
'P': 2, 'Q': 1, 'R': 6,
'S': 4, 'T': 6, 'U': 4,
'V': 2, 'W': 2, 'X': 1,
'Y': 2, 'Z': 1, '_': 2

};
usedStack = "AERETOXMYCNS_B".split('')

  for(let fullIdx in fullStack) {
    for(let usedIdx in usedStack) {
      if (fullIdx === usedStack[usedIdx] ) {
        fullStack[fullIdx]--
  }
    }

    console.log('Letter:' , fullIdx , 'Count:', fullStack[fullIdx] );
  }



// console.log(fullStack);
// console.log("used" , usedStack);
// console.log("remain" , remainStack);
