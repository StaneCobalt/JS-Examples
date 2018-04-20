var questions = [
	["Question1",0],
	["Question2",0],
	["Question3",0],
	["Question4",0],
	["Question5",0],
	["Question6",0]
];

var index = 0;

function initDiv(){
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	left.onclick = btnClickLeft;
	right.onclick = btnClickRight;
	var question = document.getElementById("question");
	question.innerHTML = questions[index][0];
}

function btnClickLeft(){
	if(index+1 >= questions.length){
		results();
	}else{
		questions[index][1] = 0;
		getNewQuestion();
	}
}

function btnClickRight(){
	if(index+1 >= questions.length){
		results();
	}else{
		questions[index][1] = 1;
		getNewQuestion();
	}
}

function getNewQuestion(){
	index++;
	var question = document.getElementById("question");
	question.innerHTML = questions[index][0];
}

function results(){
	var rightClicked = 0;
	var leftClicked = 0;
	var message = "";
	for(var i = 0; i <= index; i++){
		if(questions[i][1] == 0) leftClicked++;
		else if(questions[i][1] == 1) rightClicked++;
		message += (i+1) + ". "+ questions[i][0] + " " + ((questions[i][1] == 0) ? "No" : "Yes") + "<br/>";
	}
	var question = document.getElementById("question");
	var result = "<br/>Results<br/>Left: "+leftClicked+"<br/>Right: "+rightClicked;
	question.innerHTML = message + result;
}

function generateCardImage(){
	var card = document.getElementById("card");
}

