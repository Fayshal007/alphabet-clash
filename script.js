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


    const randomNumber = Math.random()*25;
    const index =  Math.round(randomNumber);
    const randomAlphabet = alphabets[index];
    return randomAlphabet;
}

function colorTheKey(element) {
    const alphabetKey = document.getElementById(element);
    alphabetKey.style.backgroundColor = "tomato"
}

document.addEventListener('keyup', matchkey);
function matchkey(event) {
    const keyPressed = event.key;
    const screenalphabet = document.getElementById('aphabet-show').innerText;
    if (keyPressed.toLowerCase() === screenalphabet.toLowerCase()) {
        console.log('u win');
    } else {
        console.log('u lose');
    }
}