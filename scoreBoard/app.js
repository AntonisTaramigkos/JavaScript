let scoreHome = 0
let scoreVisitors = 0
let homeScore = document.getElementById("home-score")
let visitorsScore = document.getElementById("visitors-score")
let gameReset = document.getElementById("new-game-btn")

function addScore(player,points){
    
    if(player === "home"){
        scoreHome += points
        homeScore.textContent = scoreHome
    }
    if(player === "visitors"){
        scoreVisitors +=points
        visitorsScore.textContent = scoreVisitors
        
    }

}

function resetGame(){
    visitorsScore.textContent = 0;
    homeScore.textContent = 0;
    scoreHome = 0;
    scoreVisitors = 0;

}