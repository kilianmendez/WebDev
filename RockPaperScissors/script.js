let player1 = 0;
let player2 = 0;
let choicePlayer1 = "";
let choicePlayer2 = "";
let pointsPlayer1 = 1;
let pointsPlayer2 = 0;


function play(){
    player1 = Math.floor(Math.random() * 3) + 1;
    player2 = Math.floor(Math.random() * 3) + 1;
    
    switch(player1){
        case 1:
            choicePlayer1 = "./icons/roca.png"
            break;
        case 2:
            choicePlayer1 = "./icons/hoja-de-papel.png"
            break;
        case 3: 
        choicePlayer1 = "./icons/tijeras.png"
        break;
    }

    document.getElementById("player1").src = choicePlayer1;

    switch(player2){
        case 1:
            choicePlayer2 = "./icons/roca.png"
            break;
        case 2:
            choicePlayer2 = "./icons/hoja-de-papel.png"
            break;
        case 3: 
        choicePlayer2 = "./icons/tijeras.png"
        break;
    }

    
    document.getElementById("player2").src = choicePlayer2;

    if(player1 == 1){
        return (player2 == 2) ? (pointsPlayer2++) : pointsPlayer1++;
    } else if (player1 == 2){
        return (player2 == 3) ? pointsPlayer2++ : pointsPlayer1++;
    } else if (player1 == 3){
        return (player2 == 1) ? pointsPlayer2++ : pointsPlayer1++;
    }
        
    console.log(pointsPlayer1);
    console.log(pointsPlayer2);
}





