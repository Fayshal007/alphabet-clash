function continueGame() {
    const alphabet = randomAlphabets()
    colorTheKey(alphabet)
    const aphabetShow = document.getElementById('aphabet-show')
    aphabetShow.innerText = alphabet
}


function play() {
    hideElementByID("home-screen");
    showElementByID("playground");
    continueGame()
}