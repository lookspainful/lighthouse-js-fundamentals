const multiplicationTable = function(maxValue) {
  //Initialize the table to store everything in
  let table = '';
  
  //create nested loop that increments a table of arrays
  for (let i = 1; i <= maxValue; i++){
    for (let j = 1; j <= maxValue; j++){
      //Doing some math to convert to a string.
      let maths = j * i;
      table += maths.toString() + ' ';
      
      //If it's the last value of the table, put a line break
      if (j === maxValue){
        table +='\n';
      }
    }
  }

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
