const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10)
{
  console.log(chorus);
  if (repeat === 5) {
    console.log("*change key*");
  }
  repeat++;
}

console.log("Until the sun comes up!");