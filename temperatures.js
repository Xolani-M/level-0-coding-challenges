function celToFah(celsius) 
{
  var c = celsius;
  var celToFah = c * 9 / 5 + 32;
  var temp = c + "\xB0C is " + celToFah + " \xB0F.";
    console.log(temp);
}

function fahToCel(fahrenheit) 
{
  var f = fahrenheit;
  var fahToCel = (f - 32) * 5 / 9;
  var temp = f + "\xB0F is " + fahToCel + "\xB0C.";
    console.log(temp);
} 
celToFah(30);
fahToCel(86);
