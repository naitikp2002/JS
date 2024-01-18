// document.querySelector(".result").textContent = "Hello";
const ans = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score === 0) {
    document.querySelector(".score").textContent = `Your score : ${score}`;
    document.querySelector(".result").textContent = `You lost the game :(`;
    document.querySelector("body").style.backgroundColor = "#ff0707";
  } else if (guess === ans) {
    document.querySelector(
      ".result"
    ).textContent = `You guessed it right ${guess} is Correct Answer`;
    document.querySelector(".score").textContent = `Your score : ${score--}`;
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess > ans) {
    document.querySelector(".result").textContent = `${guess} is Higher!`;
    document.querySelector(".score").textContent = `Your score : ${score--}`;
  } else {
    document.querySelector(".result").textContent = `${guess} is Smaller!`;
    document.querySelector(".score").textContent = `Your score : ${score--}`;
  }
  if (!guess) {
    document.querySelector(".result").textContent = "Enter the Number";
  }
});
