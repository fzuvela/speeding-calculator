function handleButtonClick() {

  var travelDistance = document.getElementById('drivingdistance').value;
  var travelLimit = document.getElementById('speedlimit').value;
  var travelSpeed = document.getElementById('drivingspeed').value;

  var timeCurrent = travelDistance/travelLimit;
  var timeSpeeding = travelDistance/travelSpeed;

  function time_convert(num)
 { 
  var hours = Math.floor(num / 1); 
  if (hours < 10) {
    hours = hours.toString();
    hours = "0" + hours;
} 
  var minutes = Math.floor((num * 60) % 60);
  if (minutes < 10) {
    minutes = minutes.toString();
    minutes = "0" + minutes;
}
  var seconds = Math.floor((num * 3600) % 60);
  if (seconds < 10) {
    seconds = seconds.toString();
    seconds = "0" + seconds;
}
  return hours + ":" + minutes + ":" + seconds;         
}

function exact_time (num)
{
  var hours = Math.floor(num / 1); 
  var minutes = Math.floor((num * 60) % 60);
  var seconds = Math.floor((num * 3600) % 60);
  if (hours>0)
  return hours + " hours, " + minutes + " minutes and " + seconds + " seconds"; 
  if (hours===0)
  return minutes + " minutes, and " + seconds + " seconds";    
}

var percentage = ((travelSpeed-travelLimit)/travelLimit)*100
percentage = percentage.toFixed(2);
var conclusion = timeCurrent - timeSpeeding;


  document.getElementById("left").innerHTML = "Travel time at speed limit: <br> <br> Travel time speeding: <br> <br> Speeding, you save  time, which is "+percentage+"% faster, saving:";
  document.getElementById("right").innerHTML = ""+time_convert(timeCurrent)+" <br> <br> "+time_convert(timeSpeeding)+" <br> <br> "+exact_time(conclusion)+"";
}

const selectElement = document.querySelector('#selection');

selectElement.addEventListener('change', (event) => {
  const addon = document.querySelector('#addon');
  var x = `${event.target.value}`;
  if(x==="kilometres")
  {
    document.getElementById("addon").innerHTML = "km";
    document.getElementById("addon2").innerHTML = "km/h";
    document.getElementById("addon3").innerHTML = "km/h";
  }
  else if(x==="miles")
  {
    document.getElementById("addon").innerHTML = "mi";
    document.getElementById("addon2").innerHTML = "mph";
    document.getElementById("addon3").innerHTML = "mph";
  }

  selectElement.removeEventListener(type, handler);
});

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}