function printOutVowels (str){
var vowels = ["a", "e", "i", "o", "u"]
var letters = str.split("");
var vowelsFound = [];
   for (var i in letters) {
        if (vowels.includes(letters[i])) {
            vowelsFound.push(letters[i]);
        }
    }
    console.log("Vowels:", vowelsFound.join(", "));    
}

printOutVowels(("Umuzi"));
