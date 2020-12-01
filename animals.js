//get the cards
const card = document.getElementsByClassName("card");

const words = document.getElementsByClassName("w");

//words
const animals = [
  "rat",
  "horse",
  "duck",
  "cat",
  "sheep",
  "chicken",
  "rabbit",
  "dog",
  "pig",
];
var rightAnswers = 0;
function checkResults(value) {
  for (let i = 0; i < card.length; i++) {
    if (
      animals.includes(value.toLowerCase()) &&
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
