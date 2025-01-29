let userscore = 0;
let comScore = 0;
const userscorePara = document.querySelector("#player-score");
const comScorePara = document.querySelector("#computer-score");
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let reset = document.querySelector("#reset-btn");
// Function to generate computer's choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

// Function for a draw game
const drawGame = () => {
  console.log("Game was draw");
  msg.textContent = "It's a draw";
  msg.style.backgroundColor = "#081b31";
};

// Main function to play the game
const playGame = (choice) => {
  console.log("User choice = ", choice);

  // Get computer's choice
  const computerChoice = getComputerChoice();
  console.log("Computer's choice = ", computerChoice);

  // Check winner
  if (choice === computerChoice) {
    drawGame();
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    userscore++;
    userscorePara.textContent = userscore;
    msg.textContent = `You win! Your ${choice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comScore++;
    comScorePara.textContent = comScore;
    msg.innerText = `You Lost! ${computerChoice} beats Your ${choice}`;
    msg.style.backgroundColor = "red";
  }
};

// Event listeners for user choice
choice.forEach((choice) => {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//reset game
reset.addEventListener(
  "click",
  (resetGame = () => {
    userscore = 0;
    comScore = 0;
    userscorePara.textContent = userscore;
    comScorePara.textContent = comScore;
    msg.textContent = "Play your move";
    msg.style.backgroundColor = "#081b31";
  })
);
