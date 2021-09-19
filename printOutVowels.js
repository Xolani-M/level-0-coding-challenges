let printOutVowels = (str) =>{
    let vowels = "aeiou";
    let vowelsFound = "";
    for(let i = 0; i < vowels.length; i++){
        if(str.includes(vowels[i])){
          vowelsFound += vowels[i];
        }
    }
    console.log("Vowels: " + Array.prototype.join.call(vowelsFound));
};
printOutVowels("UmuziAcademy");
