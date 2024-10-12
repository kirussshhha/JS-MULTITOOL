import { operators } from "./operators.js";
import { display, btns } from "./domElements.js";

let btnsArr = Array.from(btns);
btnsArr.map((btnsArr) => {
  btnsArr.addEventListener("click", (e) => {
    let btnVal = e.target.innerText;
    let lastChar = display.value.slice(-1);

    if (display.value === "0" && operators.includes(btnVal) && btnVal !== "-") {
      return;
    }

    if (operators.includes(lastChar) && operators.includes(btnVal)) {
      if (btnVal === "-" && lastChar !== "-") {
        display.value += btnVal;
      }
      return;
    }

    switch (btnVal) {
      case "C":
        display.value = "0";
        break;

      case "=":
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error!";
        }
        break;

      case ".":
        if (operators.includes(lastChar)) {
          return (display.value += "0.");
        }

        let currentNumber = display.value.split(/[\+\-\*\/]/).pop();

        if (!currentNumber.includes(".")) {
          display.value += ".";
        }
        break;

      default:
        if (display.value === "0") {
          display.value = btnVal;
        } else {
          display.value += btnVal;
        }
    }
  });
});
