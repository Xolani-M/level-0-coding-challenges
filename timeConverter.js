function timeConverter(number) {
  var num = number
  var hours = (num / 60);
  var hrs = Math.floor(hours);
  var minutes = (hours - hrs) * 60;
  var min = Math.round(minutes);
  return + hrs + (hrs === 1 ? " hour, " : " hours, ") + min + (min === 1 ? " minute." : " minutes.")
}

console.log(timeConverter(111));
