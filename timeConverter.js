let timeConverters =(num) => {
    let hours = (num / 60);
    let hrs = Math.floor(hours);
    let minutes = (hours - hrs) * 60;
    let min = Math.round(minutes);
    return hrs + (hrs === 1 ? " hour, " : " hours, ") + min + (min === 1 ? " minute." : " minutes.");
  }
  
  console.log(timeConverters(133));

