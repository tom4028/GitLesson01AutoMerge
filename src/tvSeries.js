var tvSeries = ['Game of Thrones', 'Stranger Things', 'Black Mirror'];

console.log(tvSeries.sort());
tvSeries.forEach(function(currentValue, index, arr){
  console.log("Foreach iteration");
  console.log(index, currentValue, arr);
});

var tvSeriesCopy = tvSeries.slice();
console.log(tvSeriesCopy);
