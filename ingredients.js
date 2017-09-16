var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var index = 0;
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}

// Write a for loop that prints out the contents of ingredients:
for (var ii = 0; ii < ingredients.length; ii++) {
  console.log(ingredients[ii]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var ii = 0; ii < ingredients.length; ii++) {
  var jj = (ingredients.length - 1) - ii;
  console.log(ingredients[jj]);
}