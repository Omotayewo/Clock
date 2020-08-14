var clockHour = document.querySelector('.clock_hour');
var clockMin = document.querySelector('.clock_min');
var clockSec = document.querySelector('.clock_sec');
function rotate() {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	//Rotating by fraction
	var secFraction = sec / 60;
	var minFraction = (min + secFraction) / 60;
	var hourFraction = (hour + minFraction) / 12;
	//Rotating in degrees
	var secDegree = secFraction * 360;
	var minDegree = minFraction * 360;
	var hourDegree = hourFraction * 360;
	//Applying to each clock hand
	clockSec.style.transform = `rotate(${secDegree}deg)`;
	clockMin.style.transform = `rotate(${minDegree}deg)`;
	clockHour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(rotate, 1000);