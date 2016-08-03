$(document).ready(function(){
	$.getJSON('http://ipinfo.io', function(res){
	  var coords = getLongLat(res.loc.split(","));
	  var city = res.city;
	  var state = res.region;
	  $.getJSON("http://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=APIKEYHERE&lat="+coords.lat+"&lon="+coords.long, function(data){
	  	var icon = data.weather[0].icon;
	  	console.log(data);
	  	$('#display').fadeOut(function() {
	  		$(this).fadeIn();
		  	$('#location').html("<h2>"+city+", "+ state+"</h2>");
		  	$('#temp').html("<p>"+Math.floor(data.main.temp)+"&#8451;</p>");
		  	$('#temp').prepend("<img id='icon' src='"+getIconURL(icon)+"'>");
	  	})
	  	
	  })
	  	
	})



});



function getIconURL(icon) {
	return "http://openweathermap.org/img/w/"+icon+".png"
}

function getLongLat(coords) {
	return {
		lat: coords[0],
		long: coords[1]
	}
}
