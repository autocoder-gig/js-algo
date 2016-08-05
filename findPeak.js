/*
Author: Gig
Problem Statement: Find a peak
Algo: Brute Force, Divide & Conquer
Use: node findPeak.js [--bruteForce/divideConquer] <integers seperated by space> | eg.: node findPeak.js --divideConquer 3 4 1 3 5 6 9 
*/
var algo = require('./algo');

for(key in algo) {
    this[key] = algo[key];
}

(function(global){
var Util = function(param,fun){
    var arr_length = param.length;
    if(param[0]==='--bruteForce') {
        return fun(mapNumber(param.slice(1,arr_length),function(item){
                return Number(item);
            }
        ), 'bruteForce');
    } else if(param[0]==='--divideConquer') {
        return fun(mapNumber(param.slice(1,arr_length),function(item){
                             return Number(item);
                                          }
                ), 'divideConquer');
    } else if(!isNaN(param[0])) {
        return fun(mapNumber(param,function(item){
                return Number(item);
            }
        ));
    } else {
        return "Wrong parameter!\n How to Use:\n node findpeak.js [--bruteForce/divideConquer] <numbers seperated by space>";
    }
}

var findPeak = function(arr, algo, indexCorrection) {
    indexCorrection = indexCorrection || 0;
    var result = {
        index:null,
        value:null
    };
    var len = arr.length;
    if(len === 0) {
            return result;
    } else if(len === 1 ) {
            result.index=0+indexCorrection;
            result.value = arr[0];
            return result;
    } else if(len === 2) {
            return maxArray(arr,indexCorrection);
    }
    algo = algo || 'divideConquer';  //Default Method divide & conquer
    if(algo === 'bruteForce') {
        for(var i=0; i<len; i++) {
            if(i===0){
                if(arr[i]>=arr[i+1]){
                    break;
                }
            } else if(i===len-1){
                if(arr[i]>=arr[i-1]){
                    break;
                }
            } else if(arr[i-1]<=arr[i] && arr[i]>=arr[i+1]){
                break;
            }
        }
        result.index=i;
        result.value=arr[i];
        return result;
    } else if(algo === 'divideConquer'){
        if(len%2==0)
            var n = len/2;
        else
            var n = (len-1)/2;
        if(arr[n]>=arr[n-1] && arr[n]>=arr[n+1]){
            result.index=n+indexCorrection;
            result.value = arr[n];
            return result;
        } else if(arr[n]<=arr[n-1]) {
            return findPeak(arr.slice(0,n), 'divideConquer', indexCorrection);
        } else {
            return findPeak(arr.slice(n+1,len), 'divideConquer', indexCorrection+n+1);
        }
    }
}

global.algo.findPeak = findPeak;
global.algo.maxArray = maxArray;
global.algo.findPeak.Util = Util
}(this));

