// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // V = 4/3 * pi * r ^ 3
  return 4 * (PI * radius * radius * radius) / 3;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // V = pi * r^2 * h/3
  return PI * radius * radius * height/3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // V = b*h
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  //Initialize something to use for the total
  let total = 0;

  //Loop through all the inputs, use functions to add to total
  for (const solid of solids){
    if (solid.type === 'sphere'){
      total += sphereVolume(solid.radius);
    }
    else if (solid.type === 'cone'){
      total += coneVolume(solid.radius, solid.height);
    }
    else if (solid.type === 'prism'){
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
