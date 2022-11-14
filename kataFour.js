const instructorWithLongestName = function(instructors) {
  let sum = 0;
  let winner = "";

  for(const instructor of instructors){
    if (instructor.name.length >= sum){
      sum = instructor.name.length;
      winner = instructor;
    }
  }

  return winner;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));