//Eira er litt kul...

let firstCard = 0;
let secondCard = 0;
let sum = firstCard + secondCard
let cards = firstCard + ' ' + secondCard
const dealer = Math.floor((Math.random()* 17 +10))
let hasBlackJack = false
let alive = true
let message = ''

let moneyBet = 0

let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let startEl = document.getElementById('start-game')
const moneyEl = document.getElementById('money-el')
const textEl = document.getElementById('text')
const newCard = document.getElementById('new-card')
const restart = document.getElementById('restart')
const standEl = document.getElementById('stand-el')
let moneyFromStorage = JSON.parse(localStorage.getItem('money'));
let money = moneyFromStorage;

moneyEl.textContent = 'Money: ' + money;




if (money === 0 || money === null) {
    money = 100
    moneyEl.textContent = 'Money: ' + money;
}


standEl.addEventListener('click', function() {
    alive = false
    if (sum > dealer || dealer > 21) {
        message = 'The dealer got ' + dealer + ' so you won!'
        money += moneyBet * 2
    } else {
        message = 'The dealer got ' + dealer + ' so you lost...'
    }
    messageEl.textContent = message;
    moneyEl.textContent = 'Money: ' + money;
})

startEl.addEventListener('click', function() {
    if (sum > 0) {

    } else {
        if (textEl.value <= money) {
            money -= textEl.value
            moneyBet = textEl.value
        }
    

    firstCard = getRandomCard();
    secondCard = getRandomCard();
    sum = firstCard + secondCard
    cards = firstCard + ' ' + secondCard
    renderGame()
    }
})

newCard.addEventListener('click', function() {
    if (alive && sum != 0) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards += ' ' + thirdCard;
        renderGame();
    }
})

restart.addEventListener('click', function() {
    localStorage.setItem('money', JSON.stringify(money))
    location.reload()
})



function renderGame() {
    //sum = firstCard + secondCard
    //cards = firstCard + ' ' + secondCard
    if (sum < 21) {
        message = 'Draw a new card?'
    } else if (sum === 21) {
        message = 'You got black jack!'
        hasBlackJack = true
    } else {
        message = 'You lost... Try again?'
        alive = false
    };



    moneyEl.textContent = 'Money: ' + money;
    messageEl.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
    cardsEl.textContent = 'Cards: ' + cards;
    console.log(alive);

}




function getRandomCard() {
    randomNum = Math.random() * 10 + 2;
    return Math.floor(randomNum);
}






