function equilateral (a,b,c){
var s = (a + b + c)/2;
return  Math.sqrt(s * (s - a) * (s - b ) * (s - c))
}

console.log(equilateral(6,6,6));
