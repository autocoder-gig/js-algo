/*
Author: Gig
Problem Statement: Find a peak in 2D
Algo: Divide & Conquer
Use: node findPeak2D.js <array> | eg.: node findPeak.js [[2,3,4,5][3,4,3,7]] (Without space)
*/
var findPeak1D = require('./findPeak');
var Util = function(param,fun){
    var array_2d=param[0].match(/([0-9]{1,}[,]{0,1}){1,}/g);
    var array_final=[];
    var i=0;
    array_1d_length = array_2d.length;
    for(var i=0;i<array_1d_length;i++){
        array_1d=mapNumber(array_2d[i].split(','), function(item){
            return Number(item);
        });
        array_final[i]=array_1d;
    }
    return fun(array_final,function(item){
            return Number(item);
        }
    );
}

var mapNumber = function(arr, func){ //Custom function for convertion string array to number array | can use .map
    for(var i =0; i<arr.length; i++){
        arr[i]=func(arr[i]);
    }
    return arr;
}

var max_array = function(arr) {
    var max;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=arr[i+1]){
            max=arr[i];
        }
    }
    return max;
}

var findPeak2D = function(arr) {
    var len = arr.length;
    if(len===0){
        return;
    } else if(len===1){
        return findPeak1D.algo.findPeak.Util(arr[0],findPeak1D.algo.findPeak) 
    } else {

    }
    var n=0;
    if(len%2==0){
        n=len/2;
    } else {
        n = len-1/2;
    }
}

var input_length = process.argv.length;
console.log(Util(process.argv.slice(2,input_length),findPeak2D));
