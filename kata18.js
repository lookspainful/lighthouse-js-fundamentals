const squareCode = function(message) {
  //Get rid of the whitespace
  //Found a really cool solution on stack overflow that goes into the + sign:
  //https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
  let chars = message.replace(/\s+/g, '');
  //Square the length of the string to input then round it up
  const sqr = Math.ceil(Math.sqrt(chars.length));

  //Make an array using the squares
  const arr1 = [];
  const arr2 = [];
  let counter = 0;
  let spaces = [];
  
  //Store the message into arr1
  let counter1 = 0;
  for (let i = 0; i < sqr; i++){
    let char = '';
    for (let j = 0; j < sqr; j++){
      if (counter >= chars.length){
        break;
      }
      char += chars[counter];
      counter++;
    }
    if (char !== ''){
      arr1.push(char);
      spaces.push(i);
    }
  }
  //Scramble the message.
  for(let i = 0; i < arr1.length; i++){
    let char = '';
    for (let j = 0; j < arr1.length; j++){
      arr2.push(arr1[j][i]);
    }
  }

  let output = arr2.toString();
  //Remove any commas that converting an array to a string include and put the spaces back in
  for (let i = 0; i <= output.length; i++){
    output = output.replace(',','');
  }
  for (let i = 0; i < output.length; i++){
    for (let j = 0; j < spaces.length; j++){
      if (i === spaces[j]){
        output[i] = ' ';
      }
    }
  }

  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));