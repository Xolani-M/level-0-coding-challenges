function timeConvert(number) {
var num = number;
var hours = (num / 60);
var hrs = Math.floor(hours);
var minutes = (hours - hrs) * 60;
var min = Math.round(minutes);
return num + " = " + hrs + " hours, " + min + " minutes.";
}

console.log(timeConvert(133));


