function maximumNumber(...array){
    let max = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        } 
    }
    console.log(max);
}
maximumNumber(1,66,35,455,56,8,66);
