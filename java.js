let computerChoice = "none";
let choiceH = "none";
let humanChoice = "none"
let cPoints = 0;
let hPoints = 0;

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


function showDown() {
    while (cPoints < 3 && hPoints < 3) {
    getComputerChoice(3);
    getHumanChoice();
    alert(`The human picked ${choiceH}`);
    alert(`The computer picked ${computerChoice}`);
    if (computerChoice === choiceH) {
        alert("Draw!");
    } 
    else if (choiceH === "Scissors") {
        if (computerChoice === "Paper") {
            ++hPoints;
            alert("You Win!");
        }
        else {
            ++cPoints;
            alert("You Lose!");
        }
    }
    else if (choiceH === "Rock") {
        if (computerChoice === "Scissors") {
            ++hPoints;
            alert("You Win!");
        }
        else {
            ++cPoints;
            alert("You Lose!");
        }
    }
    else if (choiceH === "Paper") {
        if (computerChoice === "Rock") {
            ++hPoints;
            alert("You Win!");
        }
        else {
            ++cPoints;
            alert("You Lose!");
        }
    }
    else {
        alert("Why did you pick that?");
    }
    alert(`Computer: ${cPoints}| Human: ${hPoints}`);
}
    if (cPoints === 3) {
        alert("Computer whooped yo butt boi");
    }
    else {
        alert("Congrats i guess, you really put in the work...i suppose");
    }
}

showDown();