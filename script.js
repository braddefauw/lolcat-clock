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
    image = "https://winebinec.com/wp-content/uploads/2020/01/Yappy-Event-Featured-Image-650x500-2602326872.png";
	messageText = "PARTY TIME!!";
} else if (time == napTime) {
    image = "https://www.thesprucepets.com/thmb/DB6uRHgI74J-DvZSXjsDiWdrSyY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/step_12-trick_your_mom-58b738205f9b5880803f7dd4.jpg";
	messageText = "NAP TIME...";
} else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/10/07103020/SHOT-02_53448-copy.jpg";
	messageText = "NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
    image = "https://www.madpaws.com.au/wp-content/uploads/2018/08/dog-1517133_1920.jpg";
	messageText = "TIME TO GETTUP.";
} else if (time < noon) {
	messageText = "Good morning!";
    image = "https://barkpost.com/wp-content/uploads/2016/07/good-morning-feature.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://transpawgear.com/wp-content/uploads/2021/01/transpawgear-doggy-date-night.jpeg";
} else {
    messageText = "Good afternoon!";
    image = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg";
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
	  button.style.backgroundColor = "#FF6F61";
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      button.innerText = "PARTY OVER";
	 button.style.backgroundColor = "#222";
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