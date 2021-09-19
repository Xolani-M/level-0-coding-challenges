function celToFah(celsius){
  let celToFah = celsius * 9 / 5 + 32;
  let temp = celsius + "\xB0C is " + celToFah + " \xB0F.";
    console.log(temp);
}
fahToCel(50);

function fahToCel(fahrenheit){
  let fahToCel = (fahrenheit - 32) * 5 / 9;
  let temp = fahrenheit + "\xB0F is " + fahToCel + "\xB0C.";
    console.log(temp);
}
celToFah(10);
 
