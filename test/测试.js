const arr = [11,55,33,22,44,77,66]
for(var i = 0; i<arr.length-1; i++){
    for(var j = 0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
