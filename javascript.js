
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

//console.log("Real Deal: " + computerSelection);

//let playerSelection = prompt('Choose "Rock", "Paper", or "Scissors"').toLowerCase(); //original
let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function game() {
    function playRound() {
        playerSelection = prompt('Choose "Rock", "Paper", or "Scissors"').toLowerCase(); //run the prompt
        computerSelection = getComputerChoice();

        if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
                playerScore++;
        return (`You won the round! ${playerSelection} beats ${computerSelection}.`);
    }   else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
                (playerSelection === 'paper' && computerSelection === 'scissors') || 
                (playerSelection === 'scissors' && computerSelection === 'rock')) {
                computerScore++;
        return (`You lose the round! ${computerSelection} beats ${playerSelection}.`);
    }   else if (playerSelection === computerSelection) {
        return "Draw this round!";
    }   else {
        return "Please choose an accepted value";
    }
    }
    
    //Play 5 Rounds (and print the return statement)
    console.log(playRound());
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    console.log(playRound());
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    console.log(playRound());
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    console.log(playRound());
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    console.log(playRound());
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);



    if (playerScore > computerScore) {
        console.log(`You win the game!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game!`);
    } else {
        console.log(`Draw! Tied Game!`);
    }
    
    }
    
//Original
//console.log("Player selection: " + playerSelection);
//console.log(playRound());
//console.log(game());

//New
game();

// function game() {
//     function playRound()

//     if ((playerScore + computerScore) === 5 && playerScore > computerScore) {
//         console.log(`You win! Player Score: ${playerScore} Computer Score: ${computerScore}`);
//     } else if ((playerScore + computerScore) === 5 && playerScore < computerScore) {
//         console.log(`You lose! Player Score: ${playerScore} Computer Score: ${computerScore}`);
//     } else {
//         console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
//     }

// }

