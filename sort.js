/* Author : Gig
 * Problem Statement : Sorting 
 * Algo : Insertion Sort, Merge Sort, Heap Sort
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
/*
var binarySearchSwap = function(input_array, start, order) {
    if(start == 2){
    }
    var i;
    if((start-1)%2 == 0) {
        i = (start-1)/2;
    } else {
        i = (start-2)/2;
    }
    var i =start/2;

}*/

Array.prototype.pushArr(arr, start_index, end_index) {
    start_index = start_index || 0;
    end_index = end_index || (arr.length-1);
    for(var i = start_index; i<=end_index; i++) {
        this.push(arr[i]);
    }
}
var merge = function(input_array_1, input_array_2, order) {
    l1 = input_array_1.length;
    l2 = input_array_2.length;
    var output = [];
    var a1=0, a2=0;
    for(var i = 0; i < l1+l2; i++) {
        if(order === 'asc') {
            if(a1+1 == l1) {
                output.pushArr(input_array_2, a2);
            }
            if(input_array_1[a1]<=input_array_2[a2]) {
                output.push(input_array_1[a1]);
                a1++;
            } else {
                output.push(input_array_2[a2]);
                a2++;
            }
        } else if(order === 'desc') {
            if(input_array_1[a1]>=input_array_2[a2]) {
                output.push(input_array_1[a1]);
                a1++;
            } else {
                output.push(input_array_2[a2]);
                a2++;
            }
        }
    }
}
module.exports = {
    util: function(input) {
              arr = algo.mapNumber(input, function(item) {
                  return Number(item);
              });
              return arr;
          },
    sort : function(input, algorithm, order) {
                        order = order || 'asc';  // desc/asc | By default ascending
                        length = input.length;
                        var index;
                        algorithm = algorithm || 'insertionSort';
                        if(algorithm === 'insertionSort') {
                            for(var i=1;i<length;i++) {
                                input = compareNSwap(input, i, order);
                            }
                        } else if(algorithm === 'mergeSort') {
                            if(length==1) {
                                return input;
                            } else {
                                if((length)%2 == 0) {
                                    index = (start)/2;
                                } else {
                                    index = (start-1)/2;
                                }
                                return merge(input.slice(0,index), input.slice(index+1, length-1));
                            }
                        } else if(algorithm === 'heapSort') {

                        }
                        return input;
                    },
    howToUse : ""
};
console.log(module.exports.sort(module.exports.util(process.argv.slice(2,process.argv.length))));

