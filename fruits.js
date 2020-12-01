//get the cards
const card = document.getElementsByClassName("card");

const words = document.getElementsByClassName("w");

//words
const fruits = [
  "pineapple",
  "watermelon",
  "lemon",
  "pear",
  "apple",
  "strawberry",
  "grape",
  "mango",
  "banana",
];
var rightAnswers = 0;
function getInputValues(value) {
  for (let i = 0; i < card.length; i++) {
    if (
      fruits.includes(value.toLowerCase()) &&
      card[i].getAttribute("data-value") === value.toLowerCase()
    ) {
      card[i].setAttribute("class", "success");
      rightAnswers = rightAnswers + 1;
      console.log(rightAnswers);
    }
  }
  if (rightAnswers === 9) {
    window.location.href = "../Success/success.html";
  }
}
