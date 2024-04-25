function hideElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}
function showElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function randomAlphabets() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetString.split('')


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const randomAlphabet = alphabets[index];
    return randomAlphabet;
}

function colorTheKey(element) {
    const alphabetKey = document.getElementById(element);
    alphabetKey.style.backgroundColor = "tomato"
}
function removeColorTheKey(element) {
    const alphabetKey = document.getElementById(element);
    alphabetKey.style.backgroundColor = "white"
}

document.addEventListener('keyup', function matchkey(event) {

    const keyPressed = event.key;
    if (keyPressed === 'Escape') {
        gameOver()
    }

    const screenalphabet = document.getElementById('aphabet-show').innerText;

    if (keyPressed.toLowerCase() === screenalphabet.toLowerCase()) {
        const scoreValue = getTextElementByID('score')
        const newScore = scoreValue + 1;
        setTextElementValueByID('score', newScore)
        setTextElementValueByID('final-score', newScore)
        continueGame();
        removeColorTheKey(keyPressed.toLowerCase());
    } else {
        const lifeValue = getTextElementByID('life')
        const newLife = lifeValue - 1;
        setTextElementValueByID('life', newLife)
        if (newLife === 0) {
            gameOver()
        }
    }
});

