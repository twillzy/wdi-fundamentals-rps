////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	if (move)
    {
    	return move;
    }
    else
    {
    	return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	if (move)
    {
    	return move;
    }
    else
    {
    	return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    var winner;
    var array_RPC = ["rock", "paper", "scissors"];
    var a = (array_RPC.length + array_RPC.indexOf(playerMove) - array_RPC.indexOf(computerMove)) % array_RPC.length;
    switch (a)
    {
    	case 0:
    		winner = "tie";
    		break;
    	case 1:
    		winner = "Player";
    		break;
    	case 2:
    		winner = "Computer";
    		break;
    }
    return winner;
}

function playToFive() {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5)
    {
	    var playerMove = getPlayerMove();
	    var computerMove = getComputerMove();
	    var winner = getWinner(playerMove, computerMove);

		console.log("Player chose " + playerMove + " while Computer chose " + computerMove);

		switch (winner)
		{
			case "tie":
				console.log("It's a tie!");
				break;
			case "Player":
				console.log("Player won!");
				playerWins += 1;
				break;
			case "Computer":
				console.log("Computer won!");
				computerWins += 1;
				break;
		}

	    console.log("The score is currently " + playerWins + " to " + computerWins + "\n" );
	}

	return [playerWins, computerWins];
}

playToFive();

