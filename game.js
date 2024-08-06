let questions = [
  {
    question: "Ile nóg ma pies?",
    answers: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "4" }],
    correctAnswer: "4",
  },
  {
    question: "Ile nóg ma człowiek?",
    answers: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "4" }],
    correctAnswer: "2",
  },
  {
    question: "Ile oczu ma pies?",
    answers: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "4" }],
    correctAnswer: "2",
  },
  {
    question: "Ile oczu ma cyklop?",
    answers: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "4" }],
    correctAnswer: "1",
  },
  {
    question: "Ile medali zdobyła Polska na Igrzyskach w 1968 roku?",
    answers: [{ 1: "1" }, { 2: "2" }, { 3: "3" }, { 4: "Kij wie" }],
    correctAnswer: "4",
  },
];

let questionNumber = 1;
const questionNumberBox = document.getElementById("questionNumber");
const questionBox = document.getElementById("question");
const answersBox = document.getElementById("answers");

loadNextQuestion();

function generateAnswers() {
  for (let i = 0; i < questions[randomQuestion].answers.length; i++) {
    let answers = document.createElement("div");
    answers.classList.add("answer");
    answers.setAttribute(
      "index",
      Object.keys(questions[randomQuestion].answers[i]).toString()
    );
    answers.innerHTML = Object.values(
      questions[randomQuestion].answers[i]
    ).toString();
    answers.addEventListener("click", (e) => checkAnswer(e));
    answersBox.appendChild(answers);
  }
}

function checkAnswer(e) {
  if (
    e.target.getAttribute("index") == questions[randomQuestion].correctAnswer
  ) {
    questions.splice(randomQuestion, 1);
    if (questions.length > 0) {
      console.log(questions.length)
      questionNumber++;
      loadNextQuestion();
    } else {
      alert("You Won 1.000.000 Dollars!!!");
      setTimeout(window.location.reload(), 1000);
    }
  } else {
    alert("Wrong Answer");
    setTimeout(window.location.reload(), 1000);
  }
}

function loadNextQuestion() {
  randomQuestion = Math.floor(Math.random() * questions.length);
  answersBox.innerHTML = "";
  questionNumberBox.innerHTML = `Question ${questionNumber}`;
  questionBox.innerHTML = questions[randomQuestion].question;
  generateAnswers();
}
