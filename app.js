// $(document).ready(function() {
// 	navigator.geolocation.getCurrentPosition(doRequest);
// });
doRequest(5);
 
function doRequest(position) {
	$.ajax("https://api.darksky.net/forecast/ac3e307c9cac0b097dee1c309c9ddf44/37.8267,-122.4233")
	.done(function() { console.log("success"); })
	.fail(function() { console.log("error"); });
    
}