function printOutVowels(v){
    var str=""; 
    for(var i = 0; i < v.length ; i++);
    {
        if((v[i] === "a") || (v[i] === "e") || (v[i] === "i")||(v[i] === "o")||(v[i] === "u")){
            console.log(v[i]);
        }
        else{
            str=str.concat(v[i]).concat("\n");
        }
    }
    console.log(str);
}
printOutVowels("Umuzi");
