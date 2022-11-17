const array = [0, null, 1, "", 2, undefined, 2, , , , , 4, , 4, , 5, , 6, , , , [1,2,3,4, undefined, , , , ]];
const arrFiltered = array[1].filter(el => {
  return el != null && el != '';
});
console.log(arrFiltered);