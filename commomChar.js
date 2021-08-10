function commonChar(s1,s2){
  var dict ={};
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

commonChar("house", "computers");
