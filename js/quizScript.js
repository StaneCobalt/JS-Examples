function checkAnswers(){
	var a1 = document.quiz.q1.value;
	var a2 = document.quiz.q2.value;
	var a3 = document.quiz.q3.value;
	var marks = 0;
	var total = 3;
	if(a1 == "b") marks++;
	if(a2 == "c") marks++;
	if(a3 == "a") marks++;

	var message = " you may want to try again.";
	if(marks >= total) message = " perfect!";
	else if (marks >= total*0.7) message = " you passed!";
	alert("You scored " + marks + " / " + total + message);
}