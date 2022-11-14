const checkAir = function (samples, threshold) {
  let sum = 0;

  //Loop through array. If it's dirty increase the sum.
  for (const sample of samples){
    if (sample === 'dirty'){
      sum++;
    }
  }

  //Dividing the sum of the dirty by the total amount of samples returns a value (percentage in decimal)
  sum /= samples.length;
  //Compare that value. If the amount of dirty air is greater than the threshold, it's polluted.
  if (sum > threshold){
    return 'polluted';
  }
  //If it wasn't the air isn't polluted.
  return 'clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
