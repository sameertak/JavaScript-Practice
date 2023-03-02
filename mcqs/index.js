var yes = document.getElementById("yes");
var yes2 = document.getElementById("yes2");
var no = document.getElementById("no");
var quiz = document.getElementById("questions");
var popup3 = document.getElementById("popup3");
var popup2 = document.getElementById("popup2");
var popup1 = document.getElementById("popup1");
var next = document.getElementById("next");
var score = document.getElementById("score");
var number = document.getElementById("number");
var num = 0;
var i = 0;
var result = 0;
var marks = 0;

yes.addEventListener("click", function () {
  quiz.style.display = "block";
  popup1.style.display = "none";
  popup3.style.display = "none";

  document.getElementById("question_heading").innerHTML =
    "Question " + String(parseInt(Questions[i]["id"]) + 1);
  document.getElementById("question__title").innerHTML =
    "Question " + Questions[i]["q"];

  for (let x = 0; x <= Questions[i]["a"].length - 1; x++) {
    document.getElementById(`option${x + 1}`).innerHTML =
      Questions[i]["a"][x]["text"];
  }
  number.innerHTML = `${num + 1}/${Questions.length}`;
});

no.addEventListener("click", function () {
  quiz.style.display = "none";
  popup1.style.display = "none";
  popup2.style.display = "block";
  popup3.style.display = "none";
});

yes2.addEventListener("click", function () {
  quiz.style.display = "block";
  popup2.style.display = "none";
  popup3.style.display = "none";

  document.getElementById("question_heading").innerHTML =
    "Question " + String(parseInt(Questions[i]["id"]) + 1);
  document.getElementById("question__title").innerHTML =
    "Question " + Questions[i]["q"];

  for (let x = 0; x <= Questions[i]["a"].length - 1; x++) {
    document.getElementById(`option${x + 1}`).innerHTML =
      Questions[i]["a"][x]["text"];
  }
  number.innerHTML = `${num + 1}/${Questions.length}`;
});

const Questions = [
  {
    id: 0,
    q: "What is 1+1?",
    a: [
      { text: "1", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "5", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What is 5x5?",
    a: [
      { text: "25", isCorrect: true },
      { text: "95", isCorrect: false },
      { text: "85", isCorrect: false },
      { text: "75", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "What is 9x9",
    a: [
      { text: "68", isCorrect: false },
      { text: "95", isCorrect: false },
      { text: "81", isCorrect: true },
      { text: "36", isCorrect: false },
    ],
  },
];

next.addEventListener("click", function () {
  num++;
  console.log(i);
  // console.log(parseInt(document.querySelector("input[type='radio'][name=answer]:checked").id)-1)
  if (
    Questions[i]["a"][
      parseInt(
        document.querySelector("input[type='radio'][name=answer]:checked").id
      ) - 1
    ]["isCorrect"] == true
  ) {
    marks += 1;
    console.log(marks);
  }

  i++;
  if (i > 0) {
    if (Questions[i] != undefined) {
      document.getElementById("question_heading").innerHTML =
        "Question " + String(parseInt(Questions[i]["id"]) + 1);
      document.getElementById("question__title").innerHTML =
        "Question " + Questions[i]["q"];
      for (let x = 0; x <= Questions[i]["a"].length - 1; x++) {
        document.getElementById(`option${x + 1}`).innerHTML =
          Questions[i]["a"][x]["text"];
      }
      // console.log(Questions[i]['a'][parseInt(document.querySelector("input[type='radio'][name=answer]:checked").id)]);
    } else {
      quiz.style.display = "none";
      popup1.style.display = "none";
      popup2.style.display = "none";
      popup3.style.display = "block";
    }
  }
  // console.log(Questions[i]['a'][parseInt(document.querySelector("input[type='radio'][name=answer]:checked").id)]['isCorrect']);
  score.innerHTML = `${marks}/${Questions.length}`;
  number.innerHTML = `${num + 1}/${Questions.length}`;
});
