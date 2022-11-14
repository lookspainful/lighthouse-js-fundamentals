//The functions original parameters are (input, case)
//For some reason this was fine until I started declaring other functions.
//This UTTERLY broke javascript and I could no longer use case, so changed it to type instead
//I assume this has to do with switch statements but I'm not honestly sure.
const makeType = function(input, type) {
  // Store the output in an array
  let output = [];
  let arr = [];
  
  //We need some way to count through the types.
  //We then store those types in an array to check against later. This allows for multiple or singular type.
  let count = 0;
  for (let i = 0; i < type.length; i++){
    if (type[i].length === 1){
      count = 1;
    }
    else{
      count++;
    }
  }
  //Push this to our new array.
  if (count === 1){
    arr.push(type);
  }
  else{
    arr = type;
  }
  output = input;
  

  //Depending on what the type is, return an output. The order it happens in is important, thus multiple for loops.
  //Overwrite the values in ascending order.
  for (let i = 0; i < count; i++){
    if (arr[i] === 'lower'){
      output = output.toLowerCase();
    }
    else if (arr[i] === 'upper'){
      output = output.toUpperCase();
    }
  }
  for (let i = 0; i < count; i++){
    if (arr[i] === 'vowel' || arr[i] === 'consonant'){
      output = vownantType(output, arr[i]);
    }
  }  
  for (let i = 0; i < count; i++){
    if (arr[i] === 'title'){
      output = titleType(output);
    }
    else if (arr[i] === 'snake' || arr[i] === 'kebab'){
      output = snakebabType(output, arr[i]);
    }
    else if (arr[i] === 'camel' || arr[i] === 'pascal'){
      output = camcalType(output, arr[i]);
    }
  }  
  return output;
}

//Code from kata9. Added in something if it's pascalcase.
const camcalType = function(input, type){
  //console.log("camcal is called");
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

  
  if (type === 'pascal'){
    let firstLetter = output[0];
    firstLetter = firstLetter.toUpperCase();
    output = output.slice(1);
    output = firstLetter + output;
  }

  //Finally, return the camelcase or pascalcase version
  return output;

}

const snakebabType = function(input, type){
  //Define output and index array
  let output = [];
  let index = [];


  //See above function. Key difference here is determining if type is snake or kebab.
  if (type === 'snake'){
    for (let i = 0; i < input.length; i++){
      if (input[i].includes(" ")){
        output.push(input[i].replace(input[i], '_'));
        index.push(i + 1);
      }
      else{
        output.push(input[i]);
      }
    }   
  }
  if (type === 'kebab'){
    for (let i = 0; i < input.length; i++){
      if (input[i].includes(" ")){
        output.push(input[i].replace(input[i], '-'));
        index.push(i + 1);
      }
      else{
        output.push(input[i]);
      }
    }   
  }
  //Convert it to a string
  output = output.toString();
  //Remove any commas that converting an array to a string include
  for (let i = 0; i <= output.length; i++){
    output = output.replace(',','');
  } 

  return output;
}

const titleType = function(input, type){
 
  let output = [];
  //Initialize the index at 0 since the first letter will need to be capitalized as well
  let index = [0]; 
  
  for (let i = 0; i < input.length; i++){
    //Still quite similar, except now we're just indexing what needs to be made upper.
    if (input[i].includes(" ")){
      output.push(input[i]);
      index.push(i + 1);
    }
    else{
      output.push(input[i]);
    }
  } 
  //Go through our index and replace any characters to the right of a space with their uppercase equivalent
  for (let i = 0; i < index.length; i++){
    let x = output[index[i]].toUpperCase();
    output.splice(index[i], 1, x);
  } 
  
  output = output.toString();
  
  for (let i = 0; i <= output.length; i++){
    output = output.replace(',','');
  }

  return output;
}

const vownantType = function(input, type){
  //As with the earlier kata, y wasn't counted as a vowel. Thank god for that.
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  let vowels = "aeiou";

  //Indexing and output
  let output = [];
  let index = [];


  //Determine the type. Compare all the values of input to all the values of type. If there's a match, capitalize it and store it.
  if (type === 'vowel'){
    //Store our string, index any vowels to splice after
    for (let i = 0; i < input.length; i++){
      output.push(input[i]);
      for (let j = 0; j < vowels.length; j++){
        //Make it case insensitive
        if (output[i] === vowels[j]){
          index.push(i);
        }
      }
    }

    //Splice our indexed values with their equivalent uppercase
    for (let i = 0; i < index.length; i++){
      for (let j = 0; j < vowels.length; j++){
        //Decided to make it case insensitive as well instead of worrying about if it was already upper
        if (output[index[i]] === vowels[j]){
          let x = output[index[i]].toUpperCase();
          output.splice(index[i], 1, x);
        }
      }
    }
  }

  if (type === 'consonant'){
    //Store our string, index any consonants to splice after
    for (let i = 0; i < input.length; i++){
      output.push(input[i]);
      for (let j = 0; j < consonants.length; j++){
        //Make it case insensitive
        if (output[i] === consonants[j]){
          index.push(i);
        }
      }
    }

    //Splice our indexed values with their equivalent uppercase
    for (let i = 0; i < index.length; i++){
      for (let j = 0; j < consonants.length; j++){
        //Decided to make it case insensitive as well instead of worrying about if it was already upper
        if (output[index[i]] === consonants[j]){
          let x = output[index[i]].toUpperCase();
          output.splice(index[i], 1, x);
        }
      }
    }
  }

  output = output.toString();
  //Remove any commas that converting an array to a string include
  for (let i = 0; i <= output.length; i++){
    output = output.replace(',','');
  }
  return output;
}



console.log(makeType("this is a string", "camel"));
console.log(makeType("this is a string", "pascal"));
console.log(makeType("this is a string", "snake"));
console.log(makeType("this is a string", "kebab"));
console.log(makeType("this is a string", "title"));
console.log(makeType("this is a string", "vowel"));
console.log(makeType("this is a string", "consonant"));
console.log(makeType("this is a string", ["upper", "snake"]));