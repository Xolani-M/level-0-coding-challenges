let celToFah = (celsius) =>{
  let celToFah = celsius * 9 / 5 + 32;
  let temp = celsius + "\xB0C is " + celToFah + " \xB0F.";
    return temp;
}
console.log(celToFah(50));

let fahToCel = (fahrenheit) =>{
  let fahToCel = (fahrenheit - 32) * 5 / 9;
  let temp = fahrenheit + "\xB0F is " + fahToCel + "\xB0C.";
    return temp;
}
console.log(fahToCel(122));
 
