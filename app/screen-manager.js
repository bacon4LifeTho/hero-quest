let startScreen = document.getElementById('start-screen')
let mapScreen = document.getElementById('map-screen')
let stage1Screen = document.getElementById('stage-1-screen')
// TODO create a variable for each of the other screens
let stage2Screen = document.getElementById("stage-2-screen")
let stage3Screen = document.getElementById("stage-3-screen")
let victoryScreen = document.getElementById("victory-screen")
let gameOverScreen = document.getElementsById("game-over-screen")
function hideActiveScreen() {
  document.querySelector('.screen.show')?.classList.remove('show')
}

function showStartScreen() {
  hideActiveScreen()
  startScreen.classList.add('show')
  setTimeout(() => {
    startScreen.querySelector('.action-box').classList.add('show')
  }, 1)
}

function showMap() {
  hideActiveScreen()
  mapScreen.classList.add('show')
}

function showStage1() {
  hideActiveScreen()
    stage1Screen.classList.add("show")
  
}

function showStage2() {
  hideActiveScreen()
    stage2Screen.classList.add("show")
}

function showStage3() {
  hideActiveScreen()
  stage3Screen.classList.add("show")  
}

function showVictory() {
  hideActiveScreen()
    victoryScreen.classList.add("show")
}

function showGameOver() {
  hideActiveScreen()
    gameOverScreen.classList.add("show")
}

showStartScreen()