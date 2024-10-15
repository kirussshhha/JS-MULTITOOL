import {
  pomodoroBtn,
  shortBreak,
  longBreak,
  allTypeBtns,
  startBtn,
  pauseBtn,
  resumeBtn,
  saveCustomBtn,
  customPomodoroInput,
  customShortBreakInput,
  customLongBreakInput,
  selectIfCustom,
} from "./domElements.js";
import {
  removeClickedStyle,
  bodyStyle,
  cleanInputs,
  toggleCustomVal,
} from "./styleFunctions.js";
import {
  setTimer,
  resetTimer,
  startTimer,
  pauseTimer,
  resumeTimer,
} from "./timer.js";

export const setupEventHandlers = () => {
  saveCustomBtn.addEventListener("click", () => {
    if (
      customPomodoroInput.value === "" &&
      customShortBreakInput.value === "" &&
      customLongBreakInput.value === ""
    ) {
      alert("Empty field!");
      return;
    }

    if (
      customPomodoroInput.value.includes("-") ||
      customShortBreakInput.value.includes("-") ||
      customLongBreakInput.value.includes("-")
    ) {
      alert("Time should not include minus!");
      return;
    }

    let pomodoroValue = customPomodoroInput.value;
    let shortBreakValue = customShortBreakInput.value;
    let longBreakValue = customLongBreakInput.value;

    customPomodoroInput.value = pomodoroValue.slice(0, 2);
    customShortBreakInput.value = shortBreakValue.slice(0, 2);
    customLongBreakInput.value = longBreakValue.slice(0, 2);

    const customPomodoroTime = parseInt(customPomodoroInput.value, 10) || 25;
    const customShortBreakTime = parseInt(customShortBreakInput.value, 10) || 5;
    const customLongBreakTime = parseInt(customLongBreakInput.value, 10) || 15;

    window.customTimes = {
      pomodoro: customPomodoroTime,
      shortBreak: customShortBreakTime,
      longBreak: customLongBreakTime,
    };

    alert("Custom time saved!");
    pomodoroBtn.click();
    cleanInputs();
    toggleCustomVal();  
  });

  selectIfCustom.addEventListener("click", () => {
    toggleCustomVal();
  });

  pomodoroBtn.addEventListener("click", () => {
    resetTimer();
    removeClickedStyle(allTypeBtns);
    pomodoroBtn.classList.add("_active");
    bodyStyle();
    const pomodoroTime = window.customTimes?.pomodoro || 25;
    setTimer(pomodoroTime, 0);
  });

  shortBreak.addEventListener("click", () => {
    resetTimer();
    removeClickedStyle(allTypeBtns);
    shortBreak.classList.add("_active");
    bodyStyle();
    const shortBreakTime = window.customTimes?.shortBreak || 5;
    setTimer(shortBreakTime, 0);
  });

  longBreak.addEventListener("click", () => {
    resetTimer();
    removeClickedStyle(allTypeBtns);
    longBreak.classList.add("_active");
    bodyStyle();
    const longBreakTime = window.customTimes?.longBreak || 15;
    setTimer(longBreakTime, 0);
  });

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resumeBtn.addEventListener("click", resumeTimer);

  pomodoroBtn.click();
};
