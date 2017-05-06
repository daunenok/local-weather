$(document).ready(function() {
	units = "metric";
	$.get("http://ip-api.com/json", doRequest);
});
 
function doRequest(data) {
	lat = data.lat;
	lon = data.lon;
	var str = getStr(lat, lon);
	$.get(str, forecast); 
}

function getStr(lt, ln) {
	var str = "http://api.openweathermap.org/data/2.5/weather" + 
			  "?lat=" + lt + 
	          "&lon=" + ln +
	          "&units=" + units + 
	          "&appid=dce082745e189b88f90b3f74c90880b4";
	return str;
}

function forecast(data) {
	var city = data.name + ", " + data.sys.country;
	var temp = Math.round(data.main.temp);
	var deg = (units == "metric") ? "C" : "F";
	temp += " <a id='degree' href='#'>&deg;" + deg + "</a>";
	var humi = Math.round(data.main.humidity) + " %";
	var desc = data.weather[0].main;
	var weat = "<img src='http://openweathermap.org/img/w/" +
	           data.weather[0].icon + ".png'>";

	$("#city").html(city);
	$("#temp").html(temp);
	$("#humidity").html(humi);
	$("#description").html(desc);
	$("#weather").html(weat);

	$("#temp").on("click", "#degree", degSwitch);
}

function degSwitch(event) {
	event.preventDefault();
	units = (units == "metric") ? "imperial" : "metric";
	var str = getStr(lat, lon);
	$.get(str, degChange);
}

function degChange(data) {
	var temp = Math.round(data.main.temp);
	var deg = (units == "metric") ? "C" : "F";
	temp += " <a id='degree' href='#'>&deg;" + deg + "</a>";
	$("#temp").html(temp);
}
