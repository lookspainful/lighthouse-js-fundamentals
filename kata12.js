const recipeCheck = function(bakery, ingredient){
  for (const baker of bakery){
    if (baker === ingredient){
      return true;
    }
  }
  return false;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let stuff = [];

  //Go through all of the recipes
  for (const recipe of recipes){
    //Go through all of the ingredients in the recipes
    for (let i = 0; i < recipe.ingredients.length; i++){
      //If the ingredients are available in either bakery, add it to our stuff array
      if (recipeCheck(bakeryA, recipe.ingredients[i]) || recipeCheck(bakeryB, recipe.ingredients[i])){
        stuff.push(recipe.ingredients[i]);
      }
    }
  }
  
  //Loop through all the recipes again
  for (const recipe of recipes){
    let match = 0;
    //Loop through all the stuff we have available
    for (let i = 0; i < stuff.length; i++){
      //Loop through all the ingredients, and compare
      for (let j = 0; j < recipe.ingredients.length; j++){

        //If any combination of ingredients matches what's available in stuff, it can be returned
        //There's only 1 possible combination per the spec, so if our match adds up to 2, it can be returned
        if(recipe.ingredients[j] === stuff[i]){
          match++;
          if (match === 2){
            return recipe.name;
          }
        }
        //Use this for testing
        //console.log(stuff[i], recipe.name, recipe.ingredients[j], match);
      }
    }

  }

  
}



let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
