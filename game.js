//get the cards
const card = document.getElementsByClassName("card");

//get the input
const input = document.getElementsByClassName('answer');

//words
const fruits = ['pineapple', 'watermelon', 'lemon', 'pear', 'apple', 'strawberry', 'grape', 'mango', 'banana'];

function getInputValues(value){
    for(let i = 0; i < card.length; i++){
        if(fruits.includes(value) && card[i].getAttribute('data-value') === value){
            card[i].setAttribute('class', 'success');
        }
    };
};