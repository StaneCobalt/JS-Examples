function setClock(){
	var clock = new Date();
	clock = clock.toLocaleTimeString();
	document.getElementById("clock").innerHTML = clock;
}

setInterval(setClock,1000);

function setTimer(){
	var minutes = document.getElementById("minutes").value;
	var min = parseInt(minutes);
	var sec = min*60;
	var s;
	var timer = setInterval(function() {
		s = (sec>9) ? sec%60 : '0' + sec%60;
		document.getElementById("timer").innerHTML= Math.floor(sec/60) + ':' + s;
		sec--;
		if(sec < 0){
			document.getElementById("timer").innerHTML = "-:--";
			clearInterval(timer);
		}
	}, 1000);
}
