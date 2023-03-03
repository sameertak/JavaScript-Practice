var elDiceOne = document.getElementById("dice1");
var elComeOut = document.getElementById("roll");
var newgame = document.getElementById("newgame");
var cur_score1 = document.getElementById("current__score1");
var cur_score2 = document.getElementById("current__score2");
var player1 = document.getElementById("player1");
var p1score = document.getElementById("score1");
var p2score = document.getElementById("score2");
var box1 = document.getElementById("scorediv1");
var box2 = document.getElementById("scorediv2");
var hold = document.getElementById("hold");
var player2_bg = document.getElementById("p2");
var player1_bg = document.getElementById("p1");
var player1_score = 0;
var player2_score = 0;
var click_num = 0;

p = p1score;
playerscore = player1_score;
score = cur_score1;

elComeOut.onclick = function () {
  rollDice(click_num, p, score);
};

function rollDice(num, p, score) {
  var diceOne = Math.floor(Math.random() * 6 + 1);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove("show-" + i);
    if (diceOne === i) {
      elDiceOne.classList.add("show-" + i);
    }
  }

  score.innerHTML = diceOne;

  if (num % 2 != 0) {
    if (diceOne != 1) {
      player1_score += diceOne;
      p.innerHTML = player1_score;
    } else {
      player1_score = 0;
      p.innerHTML = 0;
      click_num++;
      console.log(click_num);
      changePlayer(click_num);
    }
  } else {
    if (diceOne != 1) {
      player2_score += diceOne;
      p.innerHTML = player2_score;
    } else {
      player2_score = 0;
      p.innerHTML = 0;
      click_num++;
      console.log(click_num);
      changePlayer(click_num);
    }
  }
  if (player2_score >= 50 || player1_score >= 50) {
    elComeOut.disabled = true;
    hold.disabled = true;
  }
  if (player2_score >= 50) {
    setTimeout(function () {
      p1score.innerHTML = "WON!";
      p2score.innerHTML = "LOST!";
      box1.style.visibility = "hidden";
      box2.style.visibility = "hidden";
      elDiceOne.style.display = "none";
    }, 1500);
  }

  if (player1_score >= 50) {
    setTimeout(function () {
      p2score.innerHTML = "WON!";
      p1score.innerHTML = "LOST!";
      box2.style.visibility = "hidden";
      box1.style.visibility = "hidden";
      elDiceOne.style.display = "none";
    }, 1500);
  }
  //   console.log(player2_score, player1_score);
}

function changePlayer(num) {
  if (num % 2 != 0) {
    player1_bg.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    player2_bg.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    playerscore = player2_score;
    p = p2score;
    score = cur_score2;
  } else {
    player2_bg.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    player1_bg.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    playerscore = player1_score;
    p = p1score;
    score = cur_score1;
  }
}

newgame.addEventListener("click", function () {
  location.reload();
});

hold.addEventListener("click", function () {
  click_num++;
  changePlayer(click_num);
});
