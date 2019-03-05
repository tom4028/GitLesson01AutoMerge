var meals = ['breakfast', 'lunch', 'dinner'];
meals.push('supper');
console.log(meals.sort());
meals.forEach(function(currentValue, index, arr){
  console.log(index, currentValue, arr);
});

var mealsCopy = meals.slice();
