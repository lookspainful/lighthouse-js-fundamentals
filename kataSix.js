const whereCanIPark = function (spots, vehicle) {
  
  //All vehicles can park in regular spots, so set the type to R. We only want to compare upper case to see if there's parking.
  let type = ['R'];
  //Push others into array depending on vehicle type.
  if (vehicle === 'small'){
    type.push('S');
  }
  else if (vehicle === 'motorcycle'){
    type.push('S', 'M');
  }

  //Variable for displaying co-ordinates of parking spot
  let position = [];
  //Loop through all the rows
  for (let i = 0; i < spots.length; i++){
    //All the columns
    for (let j = 0; j < spots[i].length; j++){
      //All the different types of vehicles
      for (let k = 0; k < type.length; k++){
        //If there is an open spot, push the co-ordinates into the array then return it
        if (spots[i][j] === type[k]){
          position.push(j);
          position.push(i);
          return position;
        }
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));