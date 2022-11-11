function calculateRectangleArea(length, width){
  let answer = length * width;
  if (answer <= 0)
  {
    return;
  }
  return answer;
}
function calculateTriangleArea(base, height){
  let answer = (base * height) / 2;
  if (answer <= 0)
  {
    return;
  }
  return answer;
}
function calculateCircleArea(radius){
  let answer = (Math.PI) * (radius ** 2);
  if (radius <= 0)
  {
    return;
  }
  return answer;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined