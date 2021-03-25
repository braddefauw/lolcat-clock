var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var lolcat = document.getElementById("lolcat");
var image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';
var isPartyTime = false;

var updateClock = function () {
if (time == partyTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	messageText = "Good morning!";
    image = "https://cleverpetowners.com/wp-content/uploads/2020/07/why-is-my-cat-so-affectionate-in-the-morning.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://www.purina.co.uk/sites/default/files/2018-06/cat-silhouette-moonlight.jpg";
} else {
    messageText = "Good afternoon!";
    image = "https://cdn.pixabay.com/photo/2017/05/31/09/54/cat-2359779_960_720.jpg";
}

var timeText = document.getElementById("timeEvent");
timeText.innerHTML = messageText;
lolcat.src=image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

showCurrentTime();
};

updateClock();
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);
var button = document.getElementById("partyTimeButton");
 
var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      button.innerText = "PARTY TIME!";
	  button.style.backgroundColor = "#222";
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      button.innerText = "PARTY OVER";
	 button.style.backgroundColor = "#0A8DAB";
   }
};

button.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function () {
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function () {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function () {
	napTime = napTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);