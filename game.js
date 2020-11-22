//get the cards
const cards = document.querySelectorAll('.cards')

//when click in the card goes to the game page
cards.forEach(card => card.addEventListener('click', () =>{
    window.location.href = '../Game/game.html';
}));