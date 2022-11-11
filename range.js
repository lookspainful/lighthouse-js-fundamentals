function range(start, end, step){
  let array = [];
  //If no arguments are made, return the empty array
  if (start === undefined || end === undefined || step === undefined){
    return array;
  }

  //Initialize a variable outside of the while scope to add into
  let value = start;

  //If improper arguments, return the empty array
  if (start > end || step === 0 || step < 0){
    return array;
  }


  //Push the value into the array
  while (value <= end){
    array.push(value);
    value += step;
  }
  return array;
}

console.log(range());
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));