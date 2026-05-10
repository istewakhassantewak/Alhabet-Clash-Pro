function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase()
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point')
        removeBackgroundColorById(expectedAlphabet)
        continueGame()

    }
    else {
        console.log('You dont get a point')
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