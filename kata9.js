const camelCase = function(input) {
  //Store the output as an array which we'll convert to a string later
  let output = [];
  //Index the position of the uppercase characters to convert to uppercase
  let index = [];

  //Loop through the string.
  for (let i = 0; i < input.length; i++){
    //If there's a space, replace it with nothing and copy into array. Store for index later.
    if (input[i].includes(" ")){
      output.push(input[i].replace(input[i], ''));
      index.push(i + 1);
    }
    //Otherwise simply copy the string
    else{
      output.push(input[i]);
    }
  }

  //Go through our index and replace any characters to the right of a space with their uppercase equivalent
  for (let i = 0; i < index.length; i++){
    let x = output[index[i]].toUpperCase();
    output.splice(index[i], 1, x);
  }

  //Convert it to a string
  output = output.toString();
  //Remove any commas that converting an array to a string include
  for (let i = 0; i <= output.length; i++){
    output = output.replace(',','');
  }

  //Finally, return the camelCase version
  return output;
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));