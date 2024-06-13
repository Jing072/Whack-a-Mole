//Variabelen
const scoreOneCount = document.querySelector(".player-one-score");
const scoreTwoCount = document.querySelector(".player-two-score");
const scoreTieCount = document.querySelector(".tie");
const messageBox = document.querySelector(".message-box");
const tiles = document.querySelectorAll(".tile");
const btnEnterPlayerOne = document.querySelector(".btn-nickname-one");
const btnEnterPlayerTwo = document.querySelector(".btn-nickname-two");
const btnRestart = document.querySelector("button.restart-game");
let counter = counterScoreOne = counterScoreTwo = counterScoreTie = 0;
// Dit zijn alleen maar alphabet letters
let letters = /^[a-zA-Z]+$/;

takeTurns();

//Dit is om het input field te veranderen naar, alleen tekst
btnEnterPlayerOne.addEventListener("click", function () {
    const nicknameInputOne = document.querySelector("#nickname-one");
    const boxPlayerOne = document.querySelector(".box-player-one");

    // Hier gebruik je de alphabet letters en als het input iets anders heeft dan letters, dan krijgt de box een rode rand
    if (!nicknameInputOne.value.match(letters)) {
        nicknameInputOne.classList.add("border-red");
    } else {
        boxPlayerOne.innerHTML = `
        <div>
        <h3>${nicknameInputOne.value}</h3>
        </div>
        `;
    }
});

//Dit is om het input field te veranderen naar, alleen tekst
btnEnterPlayerTwo.addEventListener("click", function () {
    const nicknameInputTwo = document.querySelector("#nickname-two");
    const boxPlayerTwo = document.querySelector(".box-player-two");
    
    // Hier gebruik je de alphabet letters en als het input iets anders heeft dan letters, dan krijgt de box een rode rand
    if (!nicknameInputTwo.value.match(letters)) {
        nicknameInputTwo.classList.add("border-red");
    } else {
        boxPlayerTwo.innerHTML = `
        <div>
        <h3>${nicknameInputTwo.value}</h3>
        </div>
        `;
    }
});

//Als je op de knop drukt, maakt hij het bord leeg
btnRestart.addEventListener("click", function () {
    restartGame();
});

//Deze functie zorgt ervoor dat de X en O steeds omwisselt
function takeTurns() {
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.addEventListener("click", function () {
            if (tile.textContent === "" && counter % 2 === 0) {
                tile.textContent = "X";
            } else if (tile.textContent === "" && counter % 2 === 1) {
                tile.textContent = "O";
            }
            checkResult();
            counter++;

            // Met dit blok wordt er gecheckt wanneer het gelijkspel is
            if (counter === 9) {
                counterScoreTie++;
                scoreTieCount.textContent = counterScoreTie;
                messageBox.textContent = "Gelijkspel";
                restartGame();
            }
        });
    }
}


//Deze functie checkt of er drie op een rij is
function checkResult() {
    let roundWon = false;

    for (let i = 0; i < tiles.length; i++) {
        if (tiles[0, 1, 2].textContent != "" && tiles[0].textContent === tiles[1].textContent && tiles[1].textContent === tiles[2].textContent) {
            if (tiles[0, 1, 2].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[0, 1, 2].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[3, 4, 5].textContent != "" && tiles[3].textContent === tiles[4].textContent && tiles[4].textContent === tiles[5].textContent) {
            if (tiles[3, 4, 5].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[3, 4, 5].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[6, 7, 8].textContent != "" && tiles[6].textContent === tiles[7].textContent && tiles[7].textContent === tiles[8].textContent) {
            if (tiles[6, 7, 8].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[6, 7, 8].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[0, 3, 6].textContent != "" && tiles[0].textContent === tiles[3].textContent && tiles[3].textContent === tiles[6].textContent) {
            if (tiles[0, 3, 6].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[0, 3, 6].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[1, 4, 7].textContent != "" && tiles[1].textContent === tiles[4].textContent && tiles[4].textContent === tiles[7].textContent) {
            if (tiles[1, 4, 7].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[1, 4, 7].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[2, 5, 8].textContent != "" && tiles[2].textContent === tiles[5].textContent && tiles[5].textContent === tiles[8].textContent) {
            if (tiles[2, 5, 8].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[2, 5, 8].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[0, 4, 8].textContent != "" && tiles[0].textContent === tiles[4].textContent && tiles[4].textContent === tiles[8].textContent) {
            if (tiles[0, 4, 8].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[0, 4, 8].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        } else if (tiles[2, 4, 6].textContent != "" && tiles[2].textContent === tiles[4].textContent && tiles[4].textContent === tiles[6].textContent) {
            if (tiles[2, 4, 6].textContent === "X") {
                messageBox.textContent = "X heeft gewonnen";
                counterScoreOne++;
                scoreOneCount.textContent = counterScoreOne;
            } else if (tiles[2, 4, 6].textContent === "O") {
                messageBox.textContent = "O heeft gewonnen";
                counterScoreTwo++;
                scoreTwoCount.textContent = counterScoreTwo;
            }
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        restartGame();
    }
}

//Functie om het bord leeg te maken
function restartGame() {
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.textContent = "";
        counter = 0;
    }
}