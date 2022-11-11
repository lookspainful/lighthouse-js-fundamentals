const isEven = function(x){
  return x % 2 === 0;
}

const isTenEven = isEven(10);
const isElevenEven = isEven(11);

console.log(isTenEven);
console.log(isElevenEven);

console.log(isEven(10));
console.log(isEven(11));