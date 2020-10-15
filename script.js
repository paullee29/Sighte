//import { data } from './dummy';
const WordContainer = document.getElementById('word-container');
const wordButtonBox = document.getElementById('wordButtons');
const correctButton = document.getElementById('correct');
const incorrectButton = document.getElementById('incorrect');

//let words = [...data];
let words = ['a', 'about', 'all', 'an', 'and'];

let pickedWord = words.splice(Math.floor(Math.random() * words.length), 1);
//let pickedWord = words[Math.floor(Math.random() * words.length)];


//let left = words.filter(word = )

WordContainer.innerHTML = `<span class="word">${pickedWord}</span>`;


