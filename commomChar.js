let commoncharacters = (a,b) =>{
    let characters = [];
    for(let i = 0; i < a.length; i++)
    if(characters.indexOf(a[i]) === - 1){
        if(b.indexOf(a[i]) !== - 1){
            characters += a[i];
        }
    }
    console.log("Common letters: " + Array.prototype.join.call(characters));
}
commoncharacters("house","computers");

