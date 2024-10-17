import { gameBoard } from "./domElements";

const finishPosition = { x: 5, y: 5 };
let level = 1;
let walls = [];
const maxLevel = 5;

export let gameSizeX = 6;
export let gameSizeY = 6;
export let playerPosition = { x: 5, y: 0 };

export function setGameSizeX(value) {
  gameSizeX = value;
}

export function setGameSizeY(value) {
  gameSizeY = value;
}

export function initGame() {
  gameBoard.innerHTML = "";
  gameBoard.style.gridTemplateColumns = `repeat(${gameSizeX}, 60px)`;
  gameBoard.style.gridTemplateRows = `repeat(${gameSizeY}, 60px)`;

  for (let y = 0; y < gameSizeY; y++) {
    for (let x = 0; x < gameSizeX; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;
      gameBoard.appendChild(cell);
    }
  }
  renderPlayer();
  renderFinish();
  generateWalls();
  renderWalls();
}

function clearPlayer() {
  const playerCell = document.querySelector(".player");
  if (playerCell) {
    playerCell.classList.remove("player");
    playerCell.textContent = "";
  }
}

function renderPlayer() {
  clearPlayer();
  const playerCell = getCell(playerPosition.x, playerPosition.y);

  if (playerCell) {
    playerCell.classList.add("player");
    const happyImage = require("../img/happy.png");
    playerCell.innerHTML = `<img src="${happyImage}" class="game-icon" />`;
  }
}

function renderFinish() {
  const finishCell = getCell(finishPosition.x, finishPosition.y);
  if (finishCell) {
    const finishImage = require("../img/finish-flag.png");
    finishCell.innerHTML = `<img src="${finishImage}" class="game-icon" />`;
  } else {
    console.error("Финишная ячейка не найдена");
  }
}

function generateWalls() {
  walls = [];
  while (walls.length < level) {
    const wall = {
      x: Math.floor(Math.random() * gameSizeX),
      y: Math.floor(Math.random() * gameSizeY),
    };
    if (
      !isSamePosition(wall, playerPosition) &&
      !isSamePosition(wall, finishPosition) &&
      !walls.some((w) => isSamePosition(w, wall))
    ) {
      walls.push(wall);
    }
  }
}

function renderWalls() {
  walls.forEach((wall) => {
    const wallCell = getCell(wall.x, wall.y);
    wallCell.classList.add("wall");
  });
}

function getCell(x, y) {
  return document.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
}

function checkGameOver() {
  const playerCell = getCell(playerPosition.x, playerPosition.y);
  if (
    playerPosition.x < 0 ||
    playerPosition.y < 0 ||
    playerPosition.x >= gameSizeX ||
    playerPosition.y >= gameSizeY
  ) {
    alert("Вы вышли за пределы поля, игра окончена.");
    resetGame();
  } else if (playerCell.classList.contains("wall")) {
    alert("Вы наткнулись на стену, игра окончена.");
    resetGame();
  } else if (isSamePosition(playerPosition, finishPosition)) {
    if (level < maxLevel) {
      alert(`Вы достигли финиша, уровень ${level} завершен.`);
      nextLevel();
    } else {
      alert("Вы завершили все уровни");
      resetGame();
    }
  }
}

export function resetGame() {
  playerPosition = { x: gameSizeX - 1, y: 0 };
  level = 1;
  initGame();
}

function nextLevel() {
  level++;
  playerPosition = { x: gameSizeX - 1, y: 0 };
  initGame();
}

export function movePlayer(dx, dy) {
  playerPosition.x += dx;
  playerPosition.y += dy;
  renderPlayer();
  checkGameOver();
}

function isSamePosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
