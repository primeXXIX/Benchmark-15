//String Indices
//                                                                       .split(!!!)
// let stringArray = "Catch me outside, how about that?".split(' ')
//     indexCount = ''
//
// stringArray.map((x, index) => {
//   console.log(x, index + 1);
// })

function stringIndices(stringArr,idx){
// let space = " ";
let newArr = stringArr.split(" ");



for(let i = 0; i < newArr[i].length; i++){
   if(idx > 0 && idx < stringArr.length){
      indexArr = newArr.slice(idx - 1);
        return indexArr[i];
    }
  }


}

stringIndices("You have something on your face", 5);
