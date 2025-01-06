let home = document.getElementById("home")
let away = document.getElementById("away")
let homeScore = 0
let awayScore = 0

home.textContent = homeScore
away.textContent = awayScore

function addOneHome() {
    home.textContent = homeScore += 1
}

function addTwoHome() {
    home.textContent = homeScore += 2
}

function addThreeHome() {
    home.textContent = homeScore += 3
}

function addOneAway() {
    away.textContent = awayScore += 1
}

function addTwoAway() {
    away.textContent = awayScore += 2
}

function addThreeAway() {
    away.textContent = awayScore += 3
}

function newGame() {
    home.textContent = homeScore = 0
    away.textContent = awayScore = 0
}