//get the cards
const card = document.querySelectorAll('.card');

//when click in the card goes to the game page
card.forEach(c => c.addEventListener('click', () =>{
    if(c.getAttribute('data-value').includes('fruits')){
        window.location.href = '../Game/fruits.html';
    }else if(c.getAttribute('data-value').includes('animals')){
        window.location.href = '../Game/animals.html';
    }else{
        window.location.href = '../Game/colors.html';
    }
}));