const sumLargestNumbers = function(data) {

  let bigOne = 0;
  let bigTwo = 0;
  //Go through the loop twice. Once to get the biggest value, again to get the second biggest value.
  for (const datum of data){
    if(datum >= bigOne && datum >= bigTwo){
      bigOne = datum;
    }
  }
  for (const datum of data){
    if(datum >= bigTwo && datum < bigOne){
      bigTwo = datum;
    }
  }
  return bigOne + bigTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));