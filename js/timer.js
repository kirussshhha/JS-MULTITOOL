const allTypeBtns = document.querySelectorAll(".type-btn");
const body = document.body;
const pomodoroMainColor = "rgb(186, 73, 73)";
const shortBreakMainColor = "rgb(56, 133, 138)";
const longBreakMainColor = "rgb(57, 112, 151)";


const pomodoroBtn = document.querySelector("#pomodoro");
const shortBreak = document.querySelector("#shortBreak");
const longBreak = document.querySelector("#longBreak");
const startPauseBtn = document.querySelector('.start-pause-btn');


const removeClickedStyle = () => {
  allTypeBtns.forEach((btn) => {
    btn.classList.remove("_active");
  });
};

pomodoroBtn.addEventListener("click", () => {
  removeClickedStyle();
  pomodoroBtn.classList.add("_active");
  bodyStyle();
});

shortBreak.addEventListener("click", () => {
  removeClickedStyle();
  shortBreak.classList.add("_active");
  bodyStyle();
});

longBreak.addEventListener("click", () => {
  removeClickedStyle();
  longBreak.classList.add("_active");
  bodyStyle();
});

startPauseBtn.addEventListener("click", () => {
    if(startPauseBtn.innerText === 'START'){
        startPauseBtn.innerHTML = 'PAUSE';
    } else {
        startPauseBtn.innerHTML = 'START';
    }
});


function bodyStyle() {
  if (pomodoroBtn.classList.contains("_active")) {
    body.style.backgroundColor = pomodoroMainColor;
    startPauseBtn.style.color = pomodoroMainColor;
  }

  if (shortBreak.classList.contains("_active")) {
    body.style.backgroundColor = shortBreakMainColor;
    startPauseBtn.style.color = shortBreakMainColor;
  }

  if (longBreak.classList.contains("_active")) {
    body.style.backgroundColor = longBreakMainColor;
    startPauseBtn.style.color = longBreakMainColor;
  }
}

bodyStyle();
