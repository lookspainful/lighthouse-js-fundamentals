let arr1 = ["shit", "fuck"];
let arr2 = arr1;

console.log(arr2);
arr2.splice(0, 1, "oops");
console.log(arr2);