//get the elements
const card = document.getElementsByClassName("card");

const words = document.getElementsByClassName("word");

const input = document.getElementsByClassName("answer");

//variable that counts the numbers of right answers
var rightAnswers = 0;

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

function getInputValues(value) {
  if (rightAnswers === 8) {
    console.log('entrou na decisão');
    window.location.href = "../Success/success.html";
  }
  while(rightAnswers < 10){
    if (
      !card[0].getAttribute("class").includes("success") &&
      input[0].value !== "" &&
      input[0].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[0].value = "";
      card[0].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[7].classList.add("checked");
      break;
    } else if (
      input[0].value !== "" &&
      input[0].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[0].value = "";
      card[0].classList.add("error");
      setTimeout(() => {
        card[0].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[1].getAttribute("class").includes("success") &&
      input[1].value !== "" &&
      input[1].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[1].value = "";
      card[1].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[0].classList.add("checked");
      break;
    } else if (
      input[1].value !== "" &&
      input[1].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[1].value = "";
      card[1].classList.add("error");
      setTimeout(() => {
        card[1].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[2].getAttribute("class").includes("success") &&
      input[2].value !== "" &&
      input[2].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[2].value = "";
      card[2].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[5].classList.add("checked");
      break;
    } else if (
      input[2].value !== "" &&
      input[2].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[2].value = "";
      card[2].classList.add("error");
      setTimeout(() => {
        card[2].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[3].getAttribute("class").includes("success") &&
      input[3].value !== "" &&
      input[3].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[3].value = "";
      card[3].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[6].classList.add("checked");
      break;
    } else if (
      input[3].value !== "" &&
      input[3].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[3].value = "";
      card[3].classList.add("error");
      setTimeout(() => {
        card[3].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[4].getAttribute("class").includes("success") &&
      input[4].value !== "" &&
      input[4].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[4].value = "";
      card[4].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[8].classList.add("checked");
      break;
    } else if (
      input[4].value !== "" &&
      input[4].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[4].value = "";
      card[4].classList.add("error");
      setTimeout(() => {
        card[4].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[5].getAttribute("class").includes("success") &&
      input[5].value !== "" &&
      input[5].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[5].value = "";
      card[5].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[2].classList.add("checked");
      break;
    } else if (
      input[5].value !== "" &&
      input[5].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[5].value = "";
      card[5].classList.add("error");
      setTimeout(() => {
        card[5].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[6].getAttribute("class").includes("success") &&
      input[6].value !== "" &&
      input[6].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[6].value = "";
      card[6].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[1].classList.add("checked");
      break;
    } else if (
      input[6].value !== "" &&
      input[6].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[6].value = "";
      card[6].classList.add("error");
      setTimeout(() => {
        card[6].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[7].getAttribute("class").includes("success") &&
      input[7].value !== "" &&
      input[7].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[7].value = "";
      card[7].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[4].classList.add("checked");
      break;
    } else if (
      input[7].value !== "" &&
      input[7].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[7].value = "";
      card[7].classList.add("error");
      setTimeout(() => {
        card[7].classList.remove("error");
      }, 2000);
      break;
    } else if (
      !card[8].getAttribute("class").includes("success") &&
      input[8].value !== "" &&
      input[8].getAttribute("data-value") === value.toLowerCase() &&
      fruits.includes(value.toLowerCase())
    ) {
      input[8].value = "";
      card[8].classList.add("success");
      rightAnswers = rightAnswers + 1;
      words[3].classList.add("checked");
      break;
    } else if (
      input[8].value !== "" &&
      input[8].getAttribute("data-value") !== value.toLowerCase()
    ) {
      input[8].value = "";
      card[8].classList.add("error");
      setTimeout(() => {
        card[8].classList.remove("error");
      }, 2000);
      break;
    }
  }
}