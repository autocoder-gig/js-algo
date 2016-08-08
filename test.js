var algo = require('./findPeak');
var arr_length = process.argv.length;
console.log(algo.Util(process.argv.slice(2,arr_length),algo.findPeak));
