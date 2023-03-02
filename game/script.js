again = document.getElementById("again");
check = document.getElementById("check");
hidden_number = document.getElementById("hidden");
title = document.getElementById("main__prompt");
scored = document.getElementById("score");
highscored = document.getElementById("highscore");
body = document.getElementById("body");
var actual_number = Math.floor(Math.random() * 21);
var prediction_prompt = document.getElementById("prediction");
var score = 20;

console.log(actual_number);
again.addEventListener("click", function () {
  location.reload();
});

if (!localStorage.getItem("highscore")) {
  var highscore = 0;
} else {
  var highscore = localStorage.getItem("highscore");
}

scored.innerHTML = "🎯Score : " + score;
highscored.innerHTML = "🥇Highscore : " + highscore;

check.addEventListener("click", function () {
  var guess_number = parseInt(document.getElementById("guess").value);

  if (guess_number > actual_number) {
    prediction_prompt.innerHTML = "📈Too High!";
    score--;
  }
  if (guess_number < actual_number) {
    prediction_prompt.innerHTML = "📉Too Low!";
    score--;
  }
  if (guess_number === actual_number) {
    prediction_prompt.innerHTML = "";
    hidden_number.innerHTML = actual_number;
    title.innerHTML = "CONGRATULATIONS!";
    body.style.backgroundColor = "green";
    check.style.display = "none";
    guess_number.readOnly = true;
    if (score > highscore) {
      localStorage.setItem("highscore", score);
    }
  }
  if (guess_number > 20 || guess_number < 0) {
    prediction_prompt.innerHTML = "❌Number should be between 0-20";
  }

  if (score >= 0) {
    scored.innerHTML = "🎯Score : " + score;
    highscored.innerHTML = "🥇Highscore : " + highscore;
  } else {
    title.innerHTML = `YOU LOST! \n
    THE NUMBER WAS`;
    hidden_number.innerHTML = actual_number;
    body.style.backgroundColor = "red";
    check.style.display = "none";
  }
});
