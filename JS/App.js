const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scisscors");
const reset = document.querySelector(".reset-btn");
let comp = 0, user = 0;
let text = "Let's Start";

compDecision = () => {
    return Math.floor(Math.random() * 3);
}

decision = d => {
    const computer = compDecision();
    
    if((computer === 0 && d === 2) || (computer === 1 && d === 0) || (computer === 2 && d === 1)) {
        result("u");
    } else if(computer === d) {
        result("d");
    } else {
        result("c");
    }
}

result = d => {
    
    const resultCont = document.querySelector(".result");
    const compScore = document.querySelector(".comp");
    const userScore = document.querySelector(".user");

    if(d === "u") {
        user++;
        text = "User Won!";
    } else if(d === "c") {
        comp++;
        text = "Computer Won!";
    } else if(d === "d") {
        text = "Draw!";
    }

    resultCont.innerHTML = `${text}`;
    compScore.innerHTML = `${comp}`;
    userScore.innerHTML = `${user}`;

}

resetGame = e => {
    location.reload();
    
}

paper.addEventListener("click", () => {
    decision(0);
});

rock.addEventListener("click", () => {
    decision(1);
});

scissors.addEventListener("click", () => {
    decision(2);
});

reset.addEventListener("click", resetGame);