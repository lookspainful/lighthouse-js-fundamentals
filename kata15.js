const organizeInstructors = function(instructors) {
  // Create an object to copy things into
  let courses = {

  }

  //Two arrays to compare each other two, and copy into, for the courses
  let course = [];
  let arr = course;

  


  //Narrow it down to however many courses
  for (const instructor of instructors){
    //Count how many courses there, and how many times each shows up
    course.push(instructor.course);
  }
  //Validate and put only unique courses into courses object
  for (let i = 0; i < course.length; i++){
    let count = 0;
    for (let j = 0; j < arr.length; j++){
      if (course[i] === arr[j]){
        count++;
      }
      //console.log(count);
    }
    let tmp = course[i].toString();
    if (count === 1){
      courses[tmp] = [];
    }
    else if (count > 1){
      courses[tmp] = [];      
    }
  }
  //Loop through all the instructors
  for (const instructor of instructors){
    
    //Go through all the courses
    for (const property in courses){
      //If the instructor has a course that corresponds to the current property being checked,
      //push them into the object with that property
      if (instructor.course === property){
        courses[property].push(instructor.name);
      }
    }
  }
  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
