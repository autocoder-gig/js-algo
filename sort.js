/* Author : Gig
 * Problem Statement : Sorting 
 * Algo : Insertion Sort,
 * Use : 
 */

var algo = require('./algo');
var swap = function(input_array, index1, index2) {
    var tmp = input_array[index1];
    input_array[index1] = input_array[index2];
    input_array[index2] = tmp;
    return input_array;
}
var compareNSwap = function(input_array, start, order) {
    var tmp;
    if (order === 'asc') {
        for(var i = start; i>0; i--) {
            if(input_array[i]<input_array[i-1]) {
                input_array = swap(input_array, i, i-1);
            } else {
                return input_array;
            }
        }
    } else if (order === 'desc') {
        for(var i = start; i>0; i--) {
            if(input_array[i]>input_array[i-1]) { 
                input_array = swap(input_array, i, i-1);
            } else {
                return input_array;
            }
        }
    } else {
        return false;
    }
    return input_array;
}
module.exports = {
    util: function(input) {
              arr = algo.mapNumber(input, function(item) {
                  return Number(item);
              });
              return arr;
          },
    insertionSort : function(input, algorithm, order) {
                        order = order || 'asc';  // desc/asc | By default ascending
                        length = input.length;
                        algorithm = algorithm || 'insertionSort';
                        if(algorithm === 'insertionSort') {
                            for(var i=1;i<length;i++) {
                                input = compareNSwap(input, i, order);
                            }
                        }
                        return input;
                    },
    howToUse : ""
};
console.log(module.exports.insertionSort(module.exports.util(process.argv.slice(2,process.argv.length))));

