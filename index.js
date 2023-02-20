let homeScore = 0;
let awayScore = 0;

let homeElement = document.getElementById("board-home-counter");
let awayElement = document.getElementById("board-away-counter");

function increaseHomeScoreBy1() {
  homeScore += 1;
  homeElement.textContent = homeScore;
}

function increaseHomeScoreBy2() {
  homeScore += 2;
  homeElement.textContent = homeScore;
}

function increaseHomeScoreBy3() {
  homeScore += 3;
  homeElement.textContent = homeScore;
}

function increaseAwayScoreBy1() {
  awayScore += 1;
  awayElement.textContent = awayScore;
}

function increaseAwayScoreBy2() {
  awayScore += 2;
  awayElement.textContent = awayScore;
}

function increaseAwayScoreBy3() {
  awayScore += 3;
  awayElement.textContent = awayScore;
}

function newGame() {
  homeScore = 0;
  awayScore = 0;
  homeElement.textContent = homeScore;
  awayElement.textContent = awayScore;
}