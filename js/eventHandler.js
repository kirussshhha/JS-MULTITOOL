import {
  movePlayer,
  initGame,
  resetGame,
  playerPosition,
  setGameSizeX,
  setGameSizeY,
} from "./maze";
import { height, restart, start, width } from "./domElements";

export const eventHandle = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        movePlayer(0, -1);
        break;

      case "ArrowDown":
        movePlayer(0, 1);
        break;

      case "ArrowLeft":
        movePlayer(-1, 0);
        break;

      case "ArrowRight":
        movePlayer(1, 0);
        break;
    }
  });

  start.addEventListener("click", () => {
    const newGameSizeX = parseInt(width.value, 10);
    const newGameSizeY = parseInt(height.value, 10);

    if (
      isNaN(newGameSizeX) ||
      isNaN(newGameSizeY) ||
      newGameSizeX <= 0 ||
      newGameSizeY <= 0
    ) {
      alert("Пожалуйста, введите корректные размеры игрового поля.");
      return;
    }

    setGameSizeX(newGameSizeX);
    setGameSizeY(newGameSizeY);

    playerPosition.x = newGameSizeX - 1;
    playerPosition.y = 0;
    initGame();
  });

  restart.addEventListener("click", resetGame);
};
