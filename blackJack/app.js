let firstCard = 0
let secondCard = 0
let isAlive = true;
let hasBlackJack = false
let sum = 0;
let cards = []
let messageEl = document.querySelector("#message-el")
let dealerEl =document.querySelector("#dealer-el")
let cardEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")


let randomNum = function (min,max){
    return  Math.floor(Math.random()*(max-min +1))+min
}

// Dealers Hand
let dealerCardList =[]
let dealerFirstCard = randomNum(2,11)
let dealerSecondCard = randomNum(2,11)
let dealerSum = dealerFirstCard + dealerSecondCard;
console.log("Dealers sum:"+dealerSum)


//Player  Cards First Draw
firstCard = randomNum(2,11);
cards.push(firstCard);
secondCard =randomNum(2,11);
cards.push(secondCard);
sum = firstCard + secondCard


function startGame() {
    renderGame()
}
function displayCards() {
    // Clear the cardEl content before rendering the cards
    cardEl.textContent = "Cards: ";

    // Use a for loop to display each card in the cards array
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
}

function renderGame() {
    isAlive = true;
    resetNewGame();
    dealerEl.textContent = "Dealer first card: " + dealerFirstCard;
    displayCards();
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = randomNum(2,11)
    sum += card    
    cards.push(card)    
    renderGame()
    }
}
function stopDrawing(){
    if(sum > dealerSum ) {
        alert(`You have Won!!`)
        messageEl.textContent = `Your hand is ${sum} and dealer have ${dealerSum}`;
        
    }else {
        alert("You have lost 😒")
        messageEl.textContent = `Your hand is ${sum} and dealer have ${dealerSum}`
    }
    isAlive = false

}
function resetNewGame(){
    cards=[];    
    dealerCardList =[];
    sumEl.textContent="";
    cardEl.textContent="";
    dealerEl.textContent="";
}