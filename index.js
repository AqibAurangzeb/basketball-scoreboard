let homeScore = 0;
let guestScore = 0;

let homeElement = document.getElementById("board-home-counter");
let guestElement = document.getElementById("board-guest-counter");

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

function increaseGuestScoreBy1() {
  guestScore += 1;
  guestElement.textContent = guestScore;
}

function increaseGuestScoreBy2() {
  guestScore += 2;
  guestElement.textContent = guestScore;
}

function increaseGuestScoreBy3() {
  guestScore += 3;
  guestElement.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeElement.textContent = homeScore;
  guestElement.textContent = guestScore;
}