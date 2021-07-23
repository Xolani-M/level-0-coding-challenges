function commonChar(){
  var dict ={};
  var s1 = "house";
var s2 ="computers";
  for(var i=0; i < s1.length; i++) {
   dict[s1.charAt(i)] = 1;
} var commonChars =[];
  for(i = 0; i < s2.length; i++) {
   if( dict[s2.charAt(i)] === 1) {
   commonChars.push(s2.charAt(i));
}
}
  dict = "Common letters: " + commonChars.join(",");
console.log(dict);
}

commonChar();

