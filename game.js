//get the cards
const card = document.querySelectorAll('.card');

//set the word list
const fruits = ['apple', 'watermelon', 'orange', 'pear', 'cherry', 'strawberry', 'nectarine', 'grape', 'mango'];
const animals = ['dog', 'cat', 'cow', 'sheep', 'rabbit', 'duck', 'horse', 'pig', 'chicken'];
const colors = ['black', 'white', 'green', 'blue', 'red', 'pink', 'orange', 'brown', 'gray '];

//get the value of the inputs
function getInputValues(value){
    card.forEach(c => {
        if(c.getAttribute('data-value') === value){
            console.log('match');
            return;
        }else{
            console.log('does not match');
            return;
        };
    });
};