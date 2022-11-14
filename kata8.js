const repeatNumbers = function(data) {
  let arr = [];

  //Loop through every array
  for (let i = 0; i < data.length; i++){
    arr[i] = data[i][0];
    //Loop through the second value and add data[i][0] into a string
    for (let j = 1; j < data[i][1]; j++){
      arr[i] += data[i][0].toString();
    }
  }
  return arr.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));