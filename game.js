//get the cards
const card = document.getElementsByClassName("card");

const words = document.getElementsByClassName('w');

//words
const fruits = ['pineapple', 'watermelon', 'lemon', 'pear', 'apple', 'strawberry', 'grape', 'mango', 'banana'];

function getInputValues(value){
    for(let i = 0; i < card.length; i++){
        if(fruits.includes(value.toLowerCase()) && card[i].getAttribute('data-value') === value.toLowerCase()){
            card[i].setAttribute('class', 'success');
        }
    };
};