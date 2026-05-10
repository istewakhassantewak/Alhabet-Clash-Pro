function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase()
    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        const currentLife = getTextElementValueById('current-life')
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife)
        if (newLife === 0) {
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)
function continueGame() {
    const alphabet = getARandomAlphabet();


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    ShowElementById('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}
function gameOver() {
    hideElementById('play-ground');
    ShowElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet)
}