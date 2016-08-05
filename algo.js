module.export = {
    maxArray = function(inp_arr, indexCorrection) {
        indexCorrection = indexCorrection || 0;
        result = {
            index:null,
            value:null
        };
        if(inp_arr.length===0){
            return result;
        }
        var max=inp_arr[0],
            index=0;
        for(var i=1;i<inp_arr.length;i++) {
           if(inp_arr[i]>max) {
                max = inp_arr[i];
                index =i;
           }
        }
        result.index=index+indexCorrection;
        result.value=max;
        return result;
    }

    mapNumber = function(arr, func){
        for(var i =0; i<arr.length; i++){
            arr[i]=func(arr[i]);
        }
        return arr;
    }
}
