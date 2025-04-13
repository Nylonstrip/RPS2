let computerChoice = "none";
let choiceH = "none";
let humanChoice = "none"
let cPoints = 0;
let compuPoints = 0;
let hPoints = 0;
let humanPoints = 0;
let dPoints = 0;
let drawPoints = 0;
let games = 0;
let currentScore = 0;

function getComputerChoice(number) {
    let choiceN = Math.floor(Math.random() * number);
    if (choiceN === 2) {
        computerChoice = "Paper";
    }
    else if (choiceN === 1) {
        computerChoice = "Rock";
    }
    else {
        computerChoice = "Scissors";
    }
    return;
}

function getHumanChoice() {
    choiceH = prompt("Rock Paper or Scissors?");
    humanChoice = choiceH.at(0, 1).toUpperCase(1);
    if (humanChoice === "S") {
        choiceH = "Scissors";
    }
    else if (humanChoice === "R") {
        choiceH = "Rock"
    }
    else if (humanChoice === "P") {
        choiceH = "Paper"
    }
    else {
        choiceH = "Some random shit"
    }
}

function gameResult() {
    if (drawPoints != dPoints) {
        drawPoints = dPoints;
        alert("Draw!!!");
    }
    else if (humanPoints != hPoints) {
        humanPoints = hPoints;
        alert("You win!");
    }
    else if (compuPoints != cPoints) {
        compuPoints = cPoints;
        alert("You Lose...");
    }
    else {
        alert("Pick a actual answer next time...")
    }
    alert(`Computer: ${cPoints} | Human: ${hPoints} | Draws: ${dPoints}`)
}

function playRound() {
    getComputerChoice(3);
    alert(`You picked ${choiceH}`)
    alert(`The computer picked ${computerChoice}`)
    if (computerChoice === choiceH) {
        ++dPoints
    }
    else if (choiceH === "Scissors") {
        if (computerChoice === "Paper") {
            ++hPoints;
        }
        else {
            ++cPoints;
        }
    }
    else if (choiceH === "Rock") {
        if (computerChoice === "Scissors") {
            ++hPoints;
        }
        else {
            ++cPoints;
        }
    }
    else if (choiceH === "Paper") {
        if (computerChoice === "Rock") {
            ++hPoints;
        }
        else {
            ++cPoints;
        }
    }
    ++games;
    score.textContent = `Player ${hPoints} || Computer ${cPoints} || Draw ${dPoints}`;
    gameResult();
}



/*function playGame() {
    while (games < 5) {
        playRound();
    }
    if (cPoints > hPoints) {
        alert("You lost...try again?");
    }
    else if (hPoints > cPoints) {
        alert("You won!! Way to show that bot~");
    }
    else {
        alert("You're tied...what a close match.")
    }
}*/




const buttons = document.querySelectorAll("button");

let container = document.getElementById("#container");



function rpsselection(e) {
    let target = e.target;
    
    switch(target.id) {
        case 'rock':
            choiceH = "Rock";
            break;
        case 'paper':
            choiceH = "Paper";
            break;
        case 'scissors':
            choiceH = "Scissors";
            break;
    }
    playRound();
}


buttons.forEach((button) => {
    button.addEventListener("click", rpsselection);
    })

const counter = document.querySelector("#counter");
let body = document.querySelector("body")
const score = document.createElement("div");
score.classList.add("scorestyle");
score.textContent = `Do you wanna play a game?`;
counter.appendChild(score);
body.style.background = "red";
counter.style.cssText = "background: red";