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
    return fun(array_final);
}

var mapNumber = function(arr, func){ //Custom function for convertion string array to number array | can use .map
    for(var i =0; i<arr.length; i++){
        arr[i]=func(arr[i]);
    }
    return arr;
}

var findPeak2D = function(arr, start, height) {
    console.log(arr);
    console.log(start);
    console.log(height);
    start = start || 0;
    height = height || arr.length;
    len = height - start;
    if(len===0){
        return;
    } else if(len===1){
        return findPeak1D.algo.findPeak.Util(arr[0],findPeak1D.algo.findPeak); 
    }
    var n;
    if(len%2==0) {
        n = (height+start)/2;
    } else {
        n = (height+start-1)/2;
    }
    console.log(n);
    max=findPeak1D.algo.findPeak.Util(arr[n],findPeak1D.algo.findPeak);
    if(max.value>=arr[n-1][max.index] && n===1 && len===2) {
        console.log(':1');
        return max.value
        
    } else if(max.value < arr[n-1][max.index] && n===1 && len===2) {
        console.log(':2');
        return findPeak1D.algo.findPeak.Util(arr[n-1],findPeak1D.algo.findPeak);

    } else if(max.value>=arr[n-1][max.index] && max.value>=arr[n+1][max.index]){
        console.log(':3');
        return max.value;
    } else if(max.value<=arr[n-1][max.index]){
        console.log(':4');
        return findPeak2D(arr,start,n-1);
    } else {
        console.log(':5');
        return findPeak2D(arr,n+1,len);
    }
}

var input_length = process.argv.length;
console.log(Util(process.argv.slice(2,input_length),findPeak2D));
