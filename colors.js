//get the cards
const card = document.getElementsByClassName("card");

const words = document.getElementsByClassName("w");

//words
const colors = [
  "black",
  "white",
  "green",
  "blue",
  "red",
  "pink",
  "orange",
  "brown",
  "gray",
];
var rightAnswers = 0;
function checkResults(value) {
  for (let i = 0; i < card.length; i++) {
    if (
      colors.includes(value.toLowerCase()) &&
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
