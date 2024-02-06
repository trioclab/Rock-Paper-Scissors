// generating random number using Math.random and assign it in the variable randomNumber
let randomNumber = Math.random();

// function if user click rock button
function rock() {
  randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    randomNumber = "rock";
    alert(`computer choose ${randomNumber}, Game is tie.`);
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    randomNumber = "scissor";
    alert(`computer choose ${randomNumber} ,you win!`);
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    randomNumber = "paper";
    alert(`computer choose ${randomNumber} ,computer win!`);
  } else {
    alert("error");
  }
}

// function if user click paper button
function paper() {
  randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    randomNumber = "rock";
    alert(`computer choose ${randomNumber} , you win!`);
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    randomNumber = "scissor";
    alert(`computer choose ${randomNumber} , computer win !`);
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    randomNumber = "paper";
    alert(`computer choose ${randomNumber} , tie`);
  } else {
    alert("error");
  }
}

// function if user click scissor button
function scissors() {
  randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    randomNumber = "rock";
    alert(`computer choose ${randomNumber}, computer win!`);
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    randomNumber = "scissor";
    alert(`computer choose ${randomNumber}, tie `);
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    randomNumber = "paper";
    alert(`computer choose ${randomNumber} , you win!`);
  } else {
    alert("error");
  }
}
