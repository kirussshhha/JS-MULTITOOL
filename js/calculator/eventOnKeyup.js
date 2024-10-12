import { operators } from "./operators.js";
import { display } from "./domElements.js";

document.addEventListener("keydown", (e) => {
  let key = e.key;
  let lastChar = display.value.slice(-1);

  if (
    !/[0-9]/.test(key) &&
    key !== "." &&
    key !== "Backspace" &&
    !operators.includes(key)
  ) {
    e.preventDefault();
    return;
  }

  if (display.value === "" && operators.includes(key) && key !== "-") {
    e.preventDefault();
    return;
  }

  if (operators.includes(lastChar) && operators.includes(key)) {
    if (key === "-" && lastChar !== "-") {
      display.value += key;
    }
    e.preventDefault();
    return;
  }

  if (key === ".") {
    let currentNumber = display.value.split(/[\+\-\*\/]/).pop();
    if (currentNumber.includes(".")) {
      e.preventDefault();
      return;
    }
  }
});
