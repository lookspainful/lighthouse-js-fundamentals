const judgeVegetable = function(vegetables, metric){
  //Declaring variables for later use
  let win = 0;
  let winner = [];

  //Going through the object and updating the highest value
  for (let vegetable of vegetables){
    if (vegetable[metric] >= win){
      win = vegetable[metric];
    }
  }

  //If anybody has won, push them to the winner array
  for (let vegetable of vegetables){
    if (vegetable[metric] === win){
      winner.push(vegetable.submitter);
    }
  }
  //Display the winner(s) as a string
  return winner.toString();

}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 10,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
