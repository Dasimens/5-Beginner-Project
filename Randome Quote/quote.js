const quoteArray = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. - Unknown",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "What cannot be eschewed must be embraced. - William Shakespeare",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Great things never come from comfort zones. - Unknown"

];
const usedIndexes = new Set();
const quoteTag = document.getElementById('quote');


function generateQuote() {
    if (usedIndexes.size === quoteArray.length) {
        usedIndexes.clear();
    }
    while (true) {
        const randomIndex = Math.floor(Math.random() * quoteArray.length);
        if (usedIndexes.has(randomIndex)) continue;


        const quote = quoteArray[randomIndex];
        quoteTag.innerHTML = quote;
        usedIndexes.add(randomIndex);
        break
    }

}
const magicButton = document.getElementsByTagName('button')[0];
magicButton.addEventListener('mouseover',
    (event) => {
        event.target.style.backgroundColor = 'red';
    })

    magicButton.addEventListener('mouseout',
    (event) => {
        event.target.style.backgroundColor = '';
    })