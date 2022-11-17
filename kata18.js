const squareCode = function(message) {
  //Found this super cool code on stackoverflow for replacing whitespace
  //https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
  let chars = message.replace(/\s+/g, '');

  //Figuring out how many rows we'll make
  const sqr = Math.ceil(Math.sqrt(chars.length));
  const arrN = new Array(sqr);
  const arrS = new Array(sqr);
  
  //Create an empty array of the appropriate size
  for (let i = 0; i < sqr; i++){
    arrS[i] = new Array(sqr);
    arrN[i] = new Array(sqr);
  }

  //We use this as an index for storing characters into the arrays
  let counter = 0;
  //Store the message to scramble into the normal array
  for (let i = 0; i < arrN.length; i++){
    let char = '';
    for (let j = 0; j < sqr; j++){
      if (chars[counter] !== undefined){
        //Create a string to store
        char += chars[counter];
        counter++;
      }
    }
    //After the string has been made, fill the array
    arrN.fill(char, i); 
  }

  //Scramble the message
  for (let i = 0; i < sqr; i++){
    for (let j = 0; j < sqr; j++){
      if (arrN[i][j] !== undefined){
        //Go through each row
        //For the row and column of the normal array, the scrambled array should reverse that.
        arrS[j][i] = arrN[i][j];
      }
    }
    //Add a space for formatting later.
    arrS[i].push(" ");
  }

  let output = arrS.toString();
  //Remove any commas that converting an array to a string include
  for (let i = 0; i < arrS.toString().length; i++){
    output = output.replace(',', '');
  }
  
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
