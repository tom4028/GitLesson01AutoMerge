var tvSeries = ['Game of Thrones', 'Stranger Things', 'Black Mirror'];

console.log(tvSeries.sort());
tvSeries.forEach(function(currentValue, index, arr){
  console.log(index, currentValue, arr);
});

console.log(tvSeries[1]);

var tvSeriesCopy = tvSeries.slice();
