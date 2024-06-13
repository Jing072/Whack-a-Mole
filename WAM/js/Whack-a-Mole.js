console.log("main.js werkt");

//variables and querySelector
const holes = document.querySelectorAll(".hole");
const moles = document.querySelector(".mole");

//This is for to make the divs clickable
for (let i = 0; i < holes.length; i++) {
    const tile = holes[i];
    tile.addEventListener("click", function() {
    });
}

//Here underneath is the code for generating the moles

//This is for generating the moles
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

//This is for adding the mole and removing.
function generateMole() {
    holes.forEach(function(hole) {
        //This is for removing the moles in the holes
        hole.innerHTML = ""
        hole.classList.remove("active")
    });
    const random = getRandomIntInclusive (0, 8)
    const hole = holes[random] 
    ////This is for adding the moles in the holes
    hole.innerHTML = `<img class="mole" src="/img/mole.png" alt="mole" title="mole">`
    hole.classList.add('active');
}

//Here underneath are the codes for the scoreboard, points and messagebox

//variables and querySelector
const points = document.querySelector(".points");
const messages = document.querySelector(".container");

let playerPoints = 0;

//This is for the scoreboard and points
holes.forEach(function(hole) {
    hole.addEventListener("click", function(){
        if (this.classList.contains ("active")) {
            //This is for adding the points and showing a message when you hit 
            playerPoints++;
            messages.innerHTML	+= `<div>Je hebt geraakt</div>`
        } else {
            //This is for removing the points and showing a message when you don't hit
            playerPoints -= 1;
            messages.innerHTML	+= `<div>Je hebt gemist</div>`
        }
        this.classList.remove("active");
        points.textContent = playerPoints
        console.log(playerPoints);
    });
});

setInterval(() => {generateMole() }, 1000)

//This is for the leaderboard and the nameInput

let name;
let score = 0;

//variable and querySelector
const enterBtn = document.querySelector(".enter");
const leaderBoard = document.querySelector(".leaderboard")
const scores = document.querySelector(".scores")

enterBtn.addEventListener("click", function(){
    //variable and querySelector
    const usernameInput = document.querySelector("#inputField");
    //nameInput
    leaderBoard.innerHTML += `
    <div>${usernameInput.value} : score</div>`
    
});

//Here underneath is for making the playboard bigger if you have an amount of points

//By 5 points playboard 4x4
if (playerPoints == 5) {

}

//By 8 points playboard 5x5

//by 10 points playboard 6x6


