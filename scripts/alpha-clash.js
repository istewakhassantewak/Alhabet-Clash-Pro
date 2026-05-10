function continueGame() {
    const alphabet = getARandomAlphabet();


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    ShowElementById('play-ground');
    continueGame();
}