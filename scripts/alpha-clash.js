function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase()
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('You dont get a point')
        const currentLife = getTextElementValueById('current-life')
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife)
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
    ShowElementById('play-ground');
    continueGame();
}