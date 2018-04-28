var sheep1, sheep2, car;
var firstDoorSelected;
var firstSelection;
var stayed = 0;
var switched = 0;

function setDoors(){
	sheep1 = Math.floor(Math.random() * 3);
	if(sheep1 == 0){
		sheep1 = document.getElementById("door1");
		sheep2 = Math.floor(Math.random() * 2);
		if(sheep2 == 0){
			sheep2 = document.getElementById("door2");
			car = document.getElementById("door3");
		}else{
			sheep2 = document.getElementById("door3");
			car = document.getElementById("door2");
		}
	}else if(sheep1 == 1){
		sheep1 = document.getElementById("door2");
		sheep2 = Math.floor(Math.random() * 2);
		if(sheep2 == 0){
			sheep2 = document.getElementById("door1");
			car = document.getElementById("door3");
		}else{
			sheep2 = document.getElementById("door3");
			car = document.getElementById("door1");
		}
	}else{
		sheep1 = document.getElementById("door3");
		sheep2 = Math.floor(Math.random() * 2);
		if(sheep2 == 0){
			sheep2 = document.getElementById("door1");
			car = document.getElementById("door2");
		}else{
			sheep2 = document.getElementById("door2");
			car = document.getElementById("door1");
		}
	}
	sheep1.src="image/door.png";
	sheep2.src="image/door.png";
	car.src="image/door.png";
	firstDoorSelected = false;
}

function selectDoor(image){
	var hint = document.getElementById("hint");
	if(!firstDoorSelected){
		hint.innerHTML = "I will open one door now";
		image.style.border = "6px solid red";
		setTimeout(function(){
			if(sheep1 !== image){
				sheep1.src="image/sheep.png";
			}else if(sheep2 !== image){
				sheep2.src="image/sheep.png";
			}
			image.style.border = "none";
			hint.innerHTML = "Baa!";
		}, 3000);
		setTimeout(function(){
			hint.innerHTML = "Please make a second choice";
		}, 6000);
		firstDoorSelected = true;
		firstSelection = image;
	}
	else{
		hint.innerHTML = (image == firstSelection) ? "You stayed on your choice" : "You switched your choice";
		image.style.border = "6px solid red";
		setTimeout(function(){
			hint.innerHTML = "Behold, all doors will be opened now!";
		},3000);
		setTimeout(function(){
			image.style.border = "none";
			sheep1.src = "image/sheep.png";
			sheep2.src = "image/sheep.png";
			car.src = "image/car.png";
			hint.innerHTML = (image == car) ? "You win the car, congratulations!" : "You lost the game.";
			if(image == firstSelection) stayed++;
			else switched++;
			updateScores();
		},6000);
		setTimeout(function(){
			hint.innerHTML = "Play again";
		}, 9000);
		setTimeout(function(){
			setDoors();
			hint.innerHTML = "Please select a door";
		}, 12000);
	}
}

function updateScores(){
	var stayScore = document.getElementById("stayScore");
	stayScore.innerHTML = stayed;
	var switchScore = document.getElementById("switchScore");
	switchScore.innerHTML = switched;
	var total = document.getElementById("totalScore");
	total.innerHTML = switched + stayed;
	secondDoorSelected = true;
}
