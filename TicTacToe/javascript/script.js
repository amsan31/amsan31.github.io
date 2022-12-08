// var board;
// var playerO = "O";
// var PlayerX = "X";
// var currentPlayer = playerO;
// var gameOver = False;

//add images to each boxs for X and O
 // XandO[counter]


var checkingArray = ["null","null","null","null","null","null","null","null","null"]

var state = true;
var counter = 0;

function b1Click(){
	console.log ("b1");

	state = !state;


	if (state == true) {
	checkingArray[0] = 1;
		document.getElementById("blackBox1").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";

		console.log ("X");
	} else {
		checkingArray[0] = 0;
		document.getElementById("blackBox1").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";
		console.log ("O");

	}
	console.log(checkingArray);
	//If X is being pressed, then add 1 to my win array,
	// else add 0 to the array

	checkWinOrLoss();
}



function b2Click(){
	console.log ("b2");

	state = !state;

	if (state == true) {
	checkingArray[1] = 1;
		document.getElementById("blackBox2").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";
		console.log ("X");

	} else {
		checkingArray[1] = 0;
		document.getElementById("blackBox2").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";
		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();
}
function b3Click(){
	console.log ("b3");

	state = !state;

	if (state == true) {
	checkingArray[2] = 1;
			document.getElementById("blackBox3").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";


		console.log ("X");
	} else {
		checkingArray[2] = 0;
				document.getElementById("blackBox3").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";

		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();
}

function b4Click(){
	console.log ("b4");

	state = !state;

	if (state == true) {
	checkingArray[3] = 1;
		document.getElementById("blackBox4").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";


		console.log ("X");
	} else {
		checkingArray[3] = 0;
		document.getElementById("blackBox4").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";

		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();

}

function b5Click(){
	console.log ("b5");

		state = !state;

	if (state == true) {
	checkingArray[4] = 1;

	document.getElementById("blackBox5").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";

		console.log ("X");
	} else {
		checkingArray[4] = 0;
	document.getElementById("blackBox5").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";


		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();
}

function b6Click(){
	console.log ("b6");

	state = !state;

	if (state == true) {
	checkingArray[5] = 1;

		document.getElementById("blackBox6").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";


		console.log ("X");
	} else {
		checkingArray[5] = 0;

		document.getElementById("blackBox6").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";



		console.log ("O");


	}
	console.log(checkingArray);
	checkWinOrLoss();
}

function b7Click(){
	console.log ("b7");

		state = !state;

	if (state == true) {
	checkingArray[6] = 1;

			document.getElementById("blackBox7").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";


		console.log ("X");
	} else {
		checkingArray[6] = 0;
		document.getElementById("blackBox7").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";


		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();

}

function b8Click(){
	console.log ("b8");

		state = !state;

	if (state == true) {
	checkingArray[7] = 1;

		document.getElementById("blackBox8").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";


		console.log ("X");
	} else {
		checkingArray[7] = 0;

		document.getElementById("blackBox8").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";



		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();
}

function b9Click(){
	console.log ("b9");

		state = !state;

	if (state == true) {
	checkingArray[8] = 1;

		document.getElementById("blackBox9").src = "https://images.vexels.com/media/users/3/142320/isolated/preview/2fb949c4cddcbe8216aff479680717e3-letterhead-red-neon-alphabet-x.png";

// player one is playing... 
		console.log ("X");
	} else {
		checkingArray[8] = 0;

		document.getElementById("blackBox9").src = "https://www.allfree-clipart.com/upload/2017/02/06/20170206164257-660ef9e9.png";

		console.log ("O");

	}
	console.log(checkingArray);
	checkWinOrLoss();

}


// wining combination = [
// 	[0,1,2],
// 	[3,4,5],
// 	[6,7,8],
// 	[0,3,6],
// 	[1,4,7],
// 	[2,5,8],
// 	[0,4,8],
// 	[2,4,6],
// 	]

function winCondition() {
	document.getElementById("winImg").style.display = "block";


}
 
function Jumpscare(){

	setTimeout ("drawSound", 3000)
}

function drawCondition() {
	document.getElementById("drawImg").style.display = "block";

}

// var audio = new Audio('drawSound');

// setTimeout

// setTimeout(function() { boo(); }, 2000);
// setTimeout(function() { reset(); }, 4000);

// function boo () {
//   $('.can-hide').addClass("hide"); 
//   audio.play();
// }




function checkWinOrLoss() {
// use this to identify the winning array
if (checkingArray[0] == 0 && checkingArray[1] == 0 && checkingArray[2] == 0) {
console.log("win1");
winCondition();
	
}

	// winCondition(); //it is to show that they won on the HTML


 else if (checkingArray[3] == 0 && checkingArray[4] == 0 && checkingArray[5] == 0){
	console.log("win2");
	winCondition();
}
	
	
else if (checkingArray[6] == 0 && checkingArray[7] == 0 && checkingArray[8] == 0) {
	console.log("win3");
	winCondition();
}


else if (checkingArray[0] == 0 && checkingArray[3] == 0 && checkingArray[6] == 0) {
	console.log("win4");
	winCondition();
}


else if (checkingArray[1] == 0 && checkingArray[4] == 0 && checkingArray[7] == 0) {
	console.log("win5");
	winCondition();
	
}


else if (checkingArray[2] == 0 && checkingArray[5] == 0 && checkingArray[8] == 0) {
	console.log("win6");
	winCondition();
}

else if (checkingArray[0] == 0 && checkingArray[4] == 0 && checkingArray[8] == 0) {
	console.log("win7");
	winCondition();
}


else if (checkingArray[2] == 0 && checkingArray[4] == 0 && checkingArray[6] == 0) {
	console.log("win8");
	winCondition();
}

// 111 posibilities

if (checkingArray[0] == 1 && checkingArray[1] == 1 && checkingArray[2] == 1) {
	console.log("win9");
	winCondition();
}

else if (checkingArray[3] == 1 && checkingArray[4] == 1 && checkingArray[5] == 1) {
	console.log("win10");
	winCondition();

}
else if (checkingArray[6] == 1 && checkingArray[7] == 1 && checkingArray[8] == 1) {
	console.log("win11");
	winCondition();


}

else if (checkingArray[0] == 1 && checkingArray[3] == 1 && checkingArray[6] == 1) {
	console.log("win12");
	winCondition();

}

else if (checkingArray[1] == 1 && checkingArray[4] == 1 && checkingArray[7] == 1) {
	console.log("win13");
	winCondition();

}

else if (checkingArray[2] == 1 && checkingArray[5] == 1 && checkingArray[8] == 1) {
	console.log("win14");
	winCondition();

}

else if (checkingArray[0] == 1 && checkingArray[4] == 1 && checkingArray[8] == 1) {
	console.log("win15");
	winCondition();

}



else if (checkingArray[2] == 1 && checkingArray[4] == 1 && checkingArray[6] == 1) {
	console.log("win16");
	winCondition();

}

//draw posibilities 

// if value 0 or 1 and value 2 = 0 or 1...... {
	// draw


else if ((checkingArray[0] =='1'||checkingArray[0]=='0')  && (checkingArray[1] =='1'||checkingArray[1]=='0')
&& (checkingArray[2] =='1'||checkingArray[2]=='0') && (checkingArray[3] =='1'||checkingArray[3]=='0') 
&& (checkingArray[4] =='1'||checkingArray[4]=='0') && (checkingArray[5] =='1'||checkingArray[5]=='0') 
&& (checkingArray[6] =='1'||checkingArray[6]=='0') && (checkingArray[7] =='1'||checkingArray[7]=='0') 
&& (checkingArray[8] =='1'||checkingArray[0]=='0')) {
	console.log("draw");
drawCondition()
Jumpscare()

}

}


function restart(){
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
 
}



// let winningPattern = [
// [1,1,1],
// [0,0,0],
// [0,0,0]
// ];

// let winningPattern = [
// [0,0,0],
// [1,1,1],
// [0,0,0]
// ];

// let winningPattern = [
// [0,0,0],
// [0,0,0],
// [1,1,1]
// ];

// let winningPattern = [
// [0,0,1],
// [0,1,0],
// [1,0,0]
// ];

// let winningPattern = [
// [1,0,0],
// [0,1,0],
// [0,0,1]
// ];

// let winningPattern = [
// [1,0,0],
// [1,0,0],
// [1,0,0]
// ];

// let winningPattern = [
// [0,1,0],
// [0,1,0],
// [0,1,0]
// ];

// let winningPattern = [
// [0,0,1],
// [0,0,1],
// [0,0,1]
// ];

