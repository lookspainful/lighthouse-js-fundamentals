function concat(numbers1, numbers2){
  let arr = [];

  for (let i = 0; i < numbers1.length; i++){
    arr.push(numbers1[i]);
  }
    
    
  for (let j = 0; j < numbers2.length; j++){
    arr.push(numbers2[j]);
  }

  return arr;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);