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
    if(len === 0) {
            return;
    } else if(len === 1 ) {
            return arr[0];
    } else if(len === 2) {
            return max(arr[0],arr[1]);
    }
    algo = algo || 'bruteForce';  //Default Method Brute Force
    if(algo === 'bruteForce') {
        for(var i=0; i<len; i++) {
            if(i===0){
                if(arr[i]>=arr[i+1]){
                    return arr[i];
                }
            } else if(i===len-1){
                if(arr[i]>=arr[i-1]){
                    return arr[i];
                }
            } else if(arr[i-1]<=arr[i] && arr[i]>=arr[i+1]){
                    return arr[i];
            }
        }
    } else if(algo === 'divide&conquer'){
        if(len%2==0)
            var n = len/2;
        else
            var n = (len-1)/2;
        if(arr[n]>=arr[n-1] && arr[n]>=arr[n+1]){
            return arr[n];
        } else if(arr[n]<=arr[n-1]) {
            return findPeak(arr.slice(0,n), 'divide&conquer');
        } else {
            return findPeak(arr.slice(n+1,len), 'divide&conquer');
        }
    }
}

console.log(findPeak(process.argv.slice(2,process.argv.length),'divide&conquer'));
