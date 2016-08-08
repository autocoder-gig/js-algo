/*
Author: Gig
Problem Statement: Find a peak in 2D
Algo: Divide & Conquer
Use: node findPeak2D.js <array> | eg.: node findPeak2D.js [[2,3,4,5][3,4,3,7]] (Without space)
*/
var algo = require('./algo');
var findPeak1D = require('./findPeak');

module.exports = {
    Util : function(param,fun){
        var array_2d=param[0].match(/([0-9]{1,}[,]{0,1}){1,}/g);
        var array_final=[];
        var i=0;
        array_1d_length = array_2d.length;
        for(var i=0;i<array_1d_length;i++){
            array_1d=findPeak1D.mapNumber(array_2d[i].split(','), function(item){
                return Number(item);
            });
            array_final[i]=array_1d;
        }
        return fun(array_final);
    },

    findPeak2D : function(arr, start, height) {
        start = start || 0;
        height = height || arr.length;
        len = height - start;
        if(len===0){
            return;
        } else if(len===1){
            return findPeak1D.Util(arr[0],findPeak1D.findPeak); 
        }
        var n;
        if(len%2==0) {
            n = (height+start)/2;
        } else {
            n = (height+start-1)/2;
        }
        max=findPeak1D.Util(arr[n],findPeak1D.findPeak);
        if(max.value>=arr[n-1][max.index] && n===1 && len===2) {
            return max.value
            
        } else if(max.value < arr[n-1][max.index] && n===1 && len===2) {
            return findPeak1D.Util(arr[n-1],findPeak1D.findPeak);

        } else if(max.value>=arr[n-1][max.index] && max.value>=arr[n+1][max.index]){
            return max.value;
        } else if(max.value<=arr[n-1][max.index]){
            return module.exports.findPeak2D(arr,start,n-1);
        } else {
            return module.exports.findPeak2D(arr,n+1,len);
        }
    }
};

var input_length = process.argv.length;
console.log(module.exports.Util(process.argv.slice(2,input_length),module.exports.findPeak2D));

