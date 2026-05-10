function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.classList.remove('bg-orange-400');
}
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return 0;
    const value = parseInt(element.innerText);
    return Number.isNaN(value) ? 0 : value;

}
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerText = value;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return '';
    const text = element.innerText;
    return text;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    const alphabet = alphabets[randomIndex];
    return alphabet;
}