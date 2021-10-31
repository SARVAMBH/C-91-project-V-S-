function addUser()
{

    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);

    window.location = "quiz_game_login.html";

}

player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("player2").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1 ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2 ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";