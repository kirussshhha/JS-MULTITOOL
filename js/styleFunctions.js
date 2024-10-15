import {
  body,
  pomodoroBtn,
  shortBreak,
  longBreak,
  startPauseBtn,
  pomodoroMainColor,
  shortBreakMainColor,
  longBreakMainColor,
  customPomodoroInput,
  customShortBreakInput,
  customLongBreakInput,
  arrowUp,
  customBlock,
} from "./domElements.js";

export const removeClickedStyle = (allTypeBtns) => {
  allTypeBtns.forEach((btn) => {
    btn.classList.remove("_active");
  });
};

export const bodyStyle = () => {
  if (pomodoroBtn.classList.contains("_active")) {
    body.style.backgroundColor = pomodoroMainColor;
    startPauseBtn.forEach((startBtn) => {
      startBtn.style.color = pomodoroMainColor;
    });
  }

  if (shortBreak.classList.contains("_active")) {
    body.style.backgroundColor = shortBreakMainColor;
    startPauseBtn.forEach((startBtn) => {
      startBtn.style.color = shortBreakMainColor;
    });
  }

  if (longBreak.classList.contains("_active")) {
    body.style.backgroundColor = longBreakMainColor;
    startPauseBtn.forEach((startBtn) => {
      startBtn.style.color = longBreakMainColor;
    });
  }
};

export const cleanInputs = () => {
  customPomodoroInput.value = "";
  customShortBreakInput.value = "";
  customLongBreakInput.value = "";
};

export const toggleCustomVal = () => {
  arrowUp.classList.toggle("_active");
  customBlock.classList.toggle("_active");
};
