console.log("main loaded");

const playerGrid = document.querySelector(".player");
const opponentGrid = document.querySelector(".opponent");


// switch en arrays voor het plaatsen en aanvalen van schepen
let turn = "player";
let gameMode = "ship-placement";

const playerShipPositions = [];
const enemyShipPositions = [];
const playerSunkShips = [];
const enemySunkShips = [];

for (let i = 1; i < 101; i++) {
    const grid = document.createElement("div");
    grid.classList.add("player-grid");
    
    grid.addEventListener("click", function(){
        
        if (turn === "player") {
            if (gameMode === "ship-placement" && !playerShipPositions.includes(i)) {
                grid.classList.add("ship");
                playerShipPositions.push(i);
                // console.log(playerShipPositions);
                console.log("Tile" + " " + i + " " + "has been clicked!");
                if (playerShipPositions.length === 5) {
                    turn = "enemy";
                }
            } else {
                console.log("Tile" + " " + i + " " + "has been clicked already!");
                grid.classList.add("attacked");
            }
        } 
    });
    playerGrid.appendChild(grid);
}
for (let i = 1; i < 101; i++) {
    const gridTwo = document.createElement("div");
    gridTwo.classList.add("enemy-grid");
    
    gridTwo.addEventListener("click", function(){
        
        if (turn === "enemy") {
            if (gameMode === "ship-placement" && !enemyShipPositions.includes(i)) {
                gridTwo.classList.add("ship");
                enemyShipPositions.push(i);
                // console.log(playerShipPositions);
                console.log("Tile" + " " + i + " " + "has been clicked!");
                if (enemyShipPositions.length === 5) {
                    turn = "player";
                }
            } else {
                console.log("Tile" + " " + i + " " + "has been clicked already!");
                gridTwo.classList.add("attacked");
            }
        } 
    });
    opponentGrid.appendChild(gridTwo);
}
















// voor de zekerheid als het niet goed werkt 

// const playerShip = [];
// const opponentShip = [];

// for (let i = 1; i < 101; i++) {
//             playerShip.push(i);
//             console.log("Tile" + " " + i + " " + "has been clicked!");
//             // anders mag je daar niet meet opklikken
//         } else {
//             console.log("Tile" + " " + i + " " + "has been clicked already!");
//             grid.classList.add("attacked");
//         }
//     });
//     playerGrid.appendChild(grid);
// }


// for (let i = 1; i < 101; i++) {
//     const gridTwo = document.createElement("div");
//     gridTwo.classList.add("enemy-grid");
    
//     gridTwo.addEventListener("click", function(){
//         // console.log("Tile" + " " + i + " " + "has been clicked!");
//         gridTwo.classList.add("ship");
//             // als hij er niet inzit dan mag je het toevoegen  
//         if (!opponentShip.includes(i)) {
//             opponentShip.push(i);
//             console.log("Tile" + " " + i + " " + "has been clicked!");
//             // anders mag je daar niet meet opklikken
//         } else {
//             console.log("Tile" + " " + i + " " + "has been clicked already!");
//             gridTwo.classList.add("attacked");
//         }
//         opponentShip.push(i);
//     });
//     opponentGrid.appendChild(gridTwo);
// }const grid = document.createElement("div");
//     grid.classList.add("player-grid");
    
//     grid.addEventListener("click", function(){
//         // console.log("Tile" + " " + i + " " + "has been clicked!");
//         grid.classList.add("ship");  
//             // als hij er niet inzit dan mag je het toevoegen   
//         if (!playerShip.includes(i)) {
//     