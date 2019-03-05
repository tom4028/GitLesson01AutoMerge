var cars = ['BMW', 'Audi', 'Volvo'];

console.log(cars.sort());
cars.forEach(function(currentValue, index, arr){
  console.log(index, currentValue, arr);
});

console.log(cars[1]);
