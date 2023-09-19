let playerPoints = 0;
let computerPoints = 0;

let rock = document.getElementById("rock-btn")
let paper = document.getElementById("paper-btn")
let scissors = document.getElementById("scissors-btn");

let reset = document.getElementById("reset-btn");

function play(choice){
    
    if (playerPoints < 5 && computerPoints < 5){

        let randomNum = Math.floor(Math.random() * 3) + 1;

        let playersChoice = choice
        let computersChoice = ""
            
        switch (randomNum){
            case 1:
                computersChoice = "rock";
                document.getElementById("choice-computer").textContent = "✊";
                break;
            case 2:
                computersChoice = "paper";
                document.getElementById("choice-computer").textContent = "🖐️";
                break;
            case 3:
                computersChoice = "scissors";
                document.getElementById("choice-computer").textContent = "✌️";
                break;
        }

        if (playersChoice == "rock"){
            document.getElementById("choice-player").textContent = "✊";
            if (computersChoice == "rock"){
                document.getElementById("round-winner-txt").textContent = "TIE!";
            } else if(computersChoice == "paper"){
                computerPoints++;
                document.getElementById("points-computer").textContent = `Computer: ${computerPoints}`;
                document.getElementById("round-winner-txt").textContent = "OHH... YOU LOOSE THE ROUND";
            } else if (computersChoice == "scissors"){
                playerPoints++;
                document.getElementById("points-player").textContent = `player: ${playerPoints}`;
                document.getElementById("round-winner-txt").textContent = "YOU WIN THE ROUND!";
            }
        } else if (playersChoice == "paper"){
            document.getElementById("choice-player").textContent = "🖐️";
            if (computersChoice == "rock"){
                playerPoints++;
                document.getElementById("points-player").textContent = `player: ${playerPoints}`;
                document.getElementById("round-winner-txt").textContent = "YOU WIN THE ROUND!";
            } else if (computersChoice == "paper"){
                document.getElementById("round-winner-txt").textContent = "TIE!";
            } else if (computersChoice == "scissors"){
                computerPoints++;
                document.getElementById("points-computer").textContent = `Computer: ${computerPoints}`;
                document.getElementById("round-winner-txt").textContent = "OHH... YOU LOOSE THE ROUND";
            }
        } else if (playersChoice == "scissors"){
            document.getElementById("choice-player").textContent = "✌️";
            if (computersChoice == "rock"){
                computerPoints++;
                document.getElementById("points-computer").textContent = `Computer: ${computerPoints}`;
                document.getElementById("round-winner-txt").textContent = "OHH... YOU LOOSE THE ROUND";
            } else if (computersChoice == "paper"){
                playerPoints++;
                document.getElementById("points-player").textContent = `player: ${playerPoints}`;
                document.getElementById("round-winner-txt").textContent = "YOU WIN THE ROUND!";
            } else if (computersChoice == "scissors"){
                document.getElementById("round-winner-txt").textContent = "TIE!";
            }
        } 

        console.log(`Player: ${playerPoints} / Computer: ${computerPoints}`)

    }

}

function resetGame(){
    playerPoints = 0;
    document.getElementById("points-player").textContent = `player: ${playerPoints}`;

    computerPoints = 0;
    document.getElementById("points-computer").textContent = `Computer: ${computerPoints}`;
}

rock.addEventListener("click", function(){
    play("rock")})
paper.addEventListener("click", function(){
    play("paper")})
scissors.addEventListener("click", function(){
    play("scissors")})

reset.addEventListener("click", function(){
    resetGame()
})

