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
    console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index =  Math.round(randomNumber);
    const randomAlphabet = alphabets[index];
    return randomAlphabet;
}