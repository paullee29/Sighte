//import { data } from './dummy';
const WordContainer = document.getElementById('word-container');
const wordButtonBox = document.getElementById('wordButtons');
const correctButton = document.getElementById('correct');
const incorrectButton = document.getElementById('incorrect');
const message = document.getElementById('message');
const currentWord = document.getElementById('word');
const startOver = document.getElementById('repeatButton');

const tempBox = document.getElementById('tempBox');

//let words = [...data];
let wordsOne1 = ['the', 'of', 'and', 'an', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this', 'have', 'from'];

let wordsOne2 = ['or', 'one', 'had', 'by', 'words', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if'];
let wordsOne3 = ['will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see'];
let wordsOne4 = ['number', 'no', 'way', 'could', 'people', 'my', 'then', 'water', 'first', 'been', 'called', 'who', 'am', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part'];

let wordsTwo1 = ['over', 'new', 'sound', 'take', 'only', 'little', 'work', 'know', 'place', 'years', 'live', 'me', 'back', 'give', 'most', 'very', 'after', 'things', 'our', 'just', 'name', 'good', 'sentence', 'man', 'think'];
let wordsTwo2 = ['say', 'great', 'where', 'help', 'through', 'much', 'before', 'line', 'right', 'too', 'means', 'old', 'any', 'same', 'tell', 'boy', 'follow', 'came', 'want', 'show', 'also', 'around', 'form', 'three', 'small'];
let wordsTwo3 = ['set', 'put', 'end', 'does', 'another', 'well', 'large', 'must', 'big', 'even', 'such', 'because', 'turn', 'here', 'why', 'ask', 'went', 'men', 'read', 'need', 'land', 'different', 'home', 'us', 'move'];
let wordsTwo4 = ['try', 'kind', 'hand', 'picture', 'again', 'change', 'off', 'play', 'spell', 'air', 'away', 'animal', 'house', 'point', 'page', 'letter', 'mother', 'answer', 'found', 'study', 'still', 'learn', 'should', 'America', 'world'];

let wordsThree1 = ['high', 'every', 'near', 'add', 'food', 'between', 'own', 'below', 'country', 'plant', 'last', 'school', 'father', 'keep', 'tree', 'never', 'start', 'city', 'earth', 'eyes', 'light', 'thought', 'head', 'under', 'story'];
let wordsThree2 = ['saw', 'left', 'don\'t', 'few', 'while', 'along', 'might', 'close', 'something', 'seem', 'next', 'hard', 'open', 'example', 'begin', 'life', 'always', 'those', 'both', 'paper', 'together', 'got', 'group', 'often', 'run'];
let wordsThree3 = ['important', 'until', 'children', 'side', 'feet', 'car', 'mile', 'night', 'walk', 'white', 'sea', 'began', 'grow', 'took', 'river', 'four', 'carry', 'state', 'once', 'book', 'hear', 'stop', 'without', 'second', 'late'];
let wordsThree4 = ['miss', 'idea', 'enough', 'eat', 'face', 'watch', 'far', 'Indian', 'real', 'almost', 'let', 'above', 'girl', 'sometimes', 'mountains', 'cut', 'young', 'talk', 'soon', 'list', 'song', 'being', 'leave', 'family', 'it\'s'];

let initialWords = [...wordsOne1, ...wordsOne2, ...wordsOne3, ...wordsOne4, 
    ...wordsTwo1, ...wordsTwo2, ...wordsTwo3, ...wordsTwo4,
    ...wordsThree1 ];

let tempWords = [...initialWords];

let firstWord = tempWords.splice(Math.floor(Math.random() * tempWords.length), 1);

currentWord.innerHTML = `${firstWord}`;

correctButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (tempWords.length > 0) {
        let nextWord = tempWords.splice(Math.floor(Math.random() * tempWords.length), 1);
        currentWord.innerHTML = `${nextWord}`;

        //tempBox.innerHTML = `${tempWords}`;
        tempBox.innerHTML = `${tempWords.length}`;

    } else {
        message.innerHTML = `<p>Congrats! You have completed the test!<p>`;

        startOver.classList.remove('hide');
        //tempBox.innerHTML = `${tempWords}`;
        tempBox.innerHTML = `${tempWords.length}`;
    }
});

incorrectButton.addEventListener('click', (e) => {
    e.preventDefault();
    message.innerHTML = `<p class="wrong">Sorry!  That is wrong.  Try again<p>`;

    WordContainer.classList.add('red');

    setTimeout(function() { WordContainer.classList.remove('red');}, 2000);
    setTimeout(function() { message.innerHTML = `<p class="wrong"><p>`;}, 2000);
    tempWords.push(currentWord.innerText);

    //tempBox.innerHTML = `${tempWords}`;
    tempBox.innerHTML = `${tempWords.length}`;
});

startOver.addEventListener('click', (e) => {
    //message.innerHTML = `<p class="wrong">Test Restarted<p>`;
    tempWords = [...initialWords];
    startOver.classList.add('hide');
    
    message.innerHTML = '';



    //tempBox.innerHTML = `${tempWords}`;
    tempBox.innerHTML = `${tempWords.length}`;
});

//tempBox.innerHTML = `${tempWords}`;
tempBox.innerHTML = `${tempWords.length}`;
