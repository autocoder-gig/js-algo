/*
Author: Gig
Problem Statement: Find a peak
Algo: Brute Force, Divide & Conquer
*/

function max(value1, value2) {
    if(value1>=value2)
        return value1;
    else
        return value2;
}

function findPeak(arr, algo) {
    var len = arr.length;
    algo = algo || 'bruteForce';  //Default Method Brute Force
    if(algo === 'bruteForce') {
        if(len === 0) {
            return;
        } else if(len === 1 ) {
            return arr[0];
        } else if(len === 2) {
            return max(arr[0],arr[1]);
        } else {
            for(var i=0; i<len; i++) {
                if(i===0){
                    if(arr[i]>=arr[i+1])
                        return arr[i];
                } else if(i===len-1){
                    if(arr[i]>=arr[i-1])
                        return arr[i];
                } else if(arr[i-1]<=arr[i]>=arr[i+1]){
                    return arr[i];
                }
            }
        }
    }
}

console.log(findPeak([2,4,5]));
