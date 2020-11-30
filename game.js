//get the cards
const card = document.getElementsByClassName('card');

//get the inputs
const input = document.getElementsByClassName('answer');

const getInputValues = (value) => {
  if(card[0].getAttribute('data-value') === value){
    card[0].setAttribute('class', 'success');
    input[0].setAttribute('disable', 'true');
  }
  if(card[1].getAttribute('data-value') === value){
    card[1].setAttribute('class', 'success');
    input[1].setAttribute('readonly', 'true');
  }
  if(card[2].getAttribute('data-value') === value){
    card[2].setAttribute('class', 'success');
    input[2].setAttribute('readonly', 'true');
  }
  if(card[3].getAttribute('data-value') === value){
    card[3].setAttribute('class', 'success');
    input[3].setAttribute('readonly', 'true');
  }
  if(card[4].getAttribute('data-value') === value){
    card[4].setAttribute('class', 'success');
    input[4].setAttribute('readonly', 'true');
  }
  if(card[5].getAttribute('data-value') === value){
    card[5].setAttribute('class', 'success');
    input[5].setAttribute('readonly', 'true');
  }
  if(card[6].getAttribute('data-value') === value){
    card[6].setAttribute('class', 'success');
    input[6].setAttribute('readonly', 'true');
  }
  if(card[7].getAttribute('data-value') === value){
    card[7].setAttribute('class', 'success');
    input[7].setAttribute('readonly', 'true');
  }
  if(card[8].getAttribute('data-value') === value){
    card[8].setAttribute('class', 'success');
    input[8].setAttribute('readonly', 'true');
  }
};