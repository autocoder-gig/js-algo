/* Author : Gig
 * Problem Statement : Document Distance
 * Algo : 
 * Use : 
 */

var algo = require('./algo');
module.exports = {
    vectorDoc : function (document) {
                    var vector = {};
                    var vectorArray = document.split(' ');
                    for(index in vectorArray) {
                        key = vectorArray[index];
                        if(vector[key]){
                            vector[key]++;
                        } else {
                            vector[key]=1;
                        }
                    }
                    return vector;
                },
    vectorDistance : function(v1,v2) {

                     },
    documentDistance : function() {
                       }
};
console.log(vectorDoc("awd awdd efsf awd asd"));
