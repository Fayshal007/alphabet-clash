function continueGame() {
    const alphabet = randomAlphabets()
    console.log(alphabet);
}


function play() {
    hideElementByID("home-screen");
    showElementByID("playground");
    continueGame()
}