function continueGame() {
    const alphabet = randomAlphabets()
    colorTheKey(alphabet)
    const aphabetShow = document.getElementById('aphabet-show')
    aphabetShow.innerText = alphabet;
}

function play() {

    hideElementByID("home-screen");
    showElementByID("playground");
    hideElementByID('score-card');
    setTextElementValueByID('score', 0);
    setTextElementValueByID('life', 5);
    continueGame()
}
function getTextElementByID(elementID) {
    const elementValue = parseInt(document.getElementById(elementID).innerText);
    return elementValue;

}
function setTextElementValueByID(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function gameOver() {
    hideElementByID("playground");
    showElementByID("score-card");
    const alphabet = document.getElementById('aphabet-show').innerText.toLowerCase();
    removeColorTheKey(alphabet)
}