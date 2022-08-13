const questions = [
  {
    question: "Which map was removed from competitive?",
    options: ["Bind", "Split", "Ascent", "Icebox"],
    answer: 2,
  },
  {
    question: "Which sidearm cost the most creds?",
    options: ["Classic", "Frenzy", "Ghost", "Sheriff"],
    answer: 4,
  },
  {
    question: "Which character has the ability 'After Shock'?",
    options: ["Phoenix", "Breach", "Sova", "Astra"],
    answer: 2,
  },
  {
    question: "Which map contains a location named Canteen?",
    options: ["Breeze", "Pearl", "Fracture", "Ascent"],
    answer: 3,
  },
  {
    question: "'Shrouded Step' is the ability of agent?",
    options: ["Raze", "Omen", "Chamber", "Brimstone"],
    answer: 2,
  },
  {
    question: "Which map consists of a Teleport?",
    options: ["Pearl", "Ascent", "Icebox", "Bind"],
    answer: 4,
  },
  {
    question: "How many creds do you need for a Vandal?",
    options: ["2100", "1900", "2500", "2900"],
    answer: 4,
  },
  {
    question: "Which ultimate summons a rocket launcher?",
    options: [
      "Head Hunter",
      "Show Stopper",
      "Rolling Thunder",
      "Orbital Strike",
    ],
    answer: 2,
  },
  {
    question:
      "How long does a valorant round last for without the spike plant?",
    options: ["1:30", "1:40", "1:50", "2:00"],
    answer: 2,
  },
  {
    question: "Which map consists of a location named Showers?",
    options: ["Bind", "Icebox", "Fracture", "Haven"],
    answer: 1,
  },
  {
    question: "Which rank has green color in its logo?",
    options: ["Immortal", "Gold", "Platinum", "Ascendant"],
    answer: 4,
  },
];

let currValue = 0;
let valueSecond = 0;
let curScore = 0;
let value = questions[currValue];
let logic = true;
const smallHeading = document.querySelector("h4");
const unorderdList = document.querySelector("ul");
const nextButton = document.querySelector("button");
const alertMsg = document.querySelector("p");

window.addEventListener("DOMContentLoaded", function (e) {
  displayCurrentQuestion();

  nextButton.addEventListener("click", function () {
    if (logic === true) {
      alertMsg.innerHTML = "";
      alertMsg.style.backgroundColor = "none";
      const currIndex = questions.indexOf(value);
      console.log(typeof currIndex, currIndex);
      if (currIndex === 9) {
        logic = false;
      }
      const radioBtnsChecked = document.querySelector(
        "input[type=radio]:checked"
      );

      if (radioBtnsChecked === null) {
        alertMsg.innerHTML = "Please select an option";
        alertMsg.style.backgroundColor = "red";
        return;
      } else {
        value = questions[valueSecond];
        let answers = value.answer;

        const radioVal = Number(radioBtnsChecked.value);

        if (radioVal + 1 === answers) {
          curScore = curScore + 1;
        }

        valueSecond++;
        displayCurrentQuestion();
      }
    } else if (logic === false) {
      gameWonMessage();
    }
  });
});

function displayCurrentQuestion() {
  smallHeading.innerHTML = "";
  value = questions[currValue];
  unorderdList.innerHTML = "";
  for (i = 0; i < 4; i++) {
    const listItem = document.createElement("li");

    smallHeading.innerHTML = value.question;
    const optionList = value.options[i];
    listItem.innerHTML =
      `<input type="radio" value="${i}" name="dynradio"/>` + optionList;

    unorderdList.appendChild(listItem);
  }
  currValue++;
}

function gameWonMessage() {
  smallHeading.innerHTML = "";
  unorderdList.innerHTML = "";
  const text = curScore < 5 ? "Better luck next time!" : "Well played!";

  smallHeading.innerHTML = `Game Over! Your score is ${curScore}. ${text}`;
}
