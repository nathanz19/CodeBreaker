//Start Memu Disappear
const startButton = document.querySelector("#startBut");
startButton.addEventListener("click", startDisappear, startGame);
const audio = document.getElementById("clicking");


function startDisappear() {
  audio.play();
  document.getElementById("title").style.display = "none";
  document.getElementById("description").style.display = "none";
  document.getElementById("startBut").style.display = "none";
  document.getElementById("thief-pic").style.display = "none";
  document.getElementById('main-layout').style.visibility = 'visible';
  startGame();
}

//Functional Keypad
const guess1Element = document.getElementById("guess1");
const guess2Element = document.getElementById("guess2");
const guess3Element = document.getElementById("guess3");

const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const audio1 = document.getElementById("clicking1");


oneButton.addEventListener("click", () => {
  audio1.play();
  updateGuess(space, "1");
  space++;
});

twoButton.addEventListener("click", () => {
  audio1.play();
  updateGuess(space, "2");
  space++;
});

threeButton.addEventListener("click", () => {
  audio1.play();
  updateGuess(space, "3");
  space++;
});

function updateGuess(index, value) {
  if (index <= 3) {
    if (index == 1) {
      guess1Element.innerText = value;
      myGuess += "" + value;
    } else if (index == 2) {
      guess2Element.innerText = value;
      myGuess += "" + value;
    } else if (index == 3) {
      guess3Element.innerText = value;
      myGuess += "" + value;
    }
  }
}

function startGame() {
  space = 1;
  pc1 = Math.floor(Math.random() * 3) + 1;
  pc2 = Math.floor(Math.random() * 3) + 1;
  pc3 = Math.floor(Math.random() * 3) + 1;
  pcGuess = pc1 + "" + pc2 + "" + pc3;
  myGuess = "";
}

const consoleText = document.getElementById("console-text");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkGuess);
const timer = document.getElementById("clock-val");
clock = 7;
const audioW = document.getElementById("wrong");
const audioC = document.getElementById("correct");
const audioG = document.getElementById("caught");

function checkGuess() {
  if (clock > 1) {
    if (myGuess == pcGuess) {
      audioC.play();
      consoleText.innerHTML = "Congratulations, you have successfully opened the vault and won the game!"
    } else {
      audioW.play();
      if (myGuess > pcGuess) {
        consoleText.innerHTML = "Too high. Try a guess lower."
        clock--;
      } else {
        consoleText.innerHTML = "Too low. Try a guess higher."
        clock--;
      }
      timer.innerHTML = clock;
      space = 1;
      myGuess = "";
      guess1Element.innerText = "";
      guess2Element.innerText = "";
      guess3Element.innerText = "";
    }
  } else if (clock > 0){
    clock--;
    timer.innerHTML = clock;
    audioG.play();
    consoleText.innerHTML = "You have been caught and arrested by the police. Gg go next."
  }

}
