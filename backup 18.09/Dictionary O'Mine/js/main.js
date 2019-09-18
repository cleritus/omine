const inputWord = document.querySelector('.word-input');
const inputTranslate = document.querySelector('.translate-input');
const inputExample = document.querySelector('.example-input');
const addBtn = document.querySelector('.add-btn');
const tbody = document.querySelector('.tbody');

const wordArray = [];
const translateArray = [];
const exampleArray = [];


const wordBtn = document.querySelector('.word-btn');
const translateBtn = document.querySelector('.translate-btn');
const exampleBtn = document.querySelector('.example-btn');


const addTerm = (e) => {
  e.preventDefault();
  // if ((inputWord.value === '') || (inputTranslate.value === '') || (inputExample.value === '')) return;

  const tr = document.createElement('tr');
  tbody.appendChild(tr);

  const tdWord = document.createElement('td');
  tr.appendChild(tdWord);
  tdWord.textContent = inputWord.value;

  const tdTranslate = document.createElement('td');
  tr.appendChild(tdTranslate);
  tdTranslate.textContent = inputTranslate.value;

  const tdExample = document.createElement('td');
  tr.appendChild(tdExample);
  tdExample.textContent = inputExample.value;

  const pushToArray = () => {
    wordArray.push(tdWord);
    translateArray.push(tdTranslate);
    exampleArray.push(tdExample);
  }

  pushToArray();

  inputWord.value = '';
  inputTranslate.value = '';
  inputExample.value = '';

}

//After click show or hide columns

const hideWords = () => {
  wordArray.forEach(item => item.classList.toggle('hidden'));
}

const hideTranslate = () => {
  translateArray.forEach(item => item.classList.toggle('hidden'))
}

const hideExample = () => {
  exampleArray.forEach(item => item.classList.toggle('hidden'))
}

// Change words in a frame



addBtn.addEventListener('click', addTerm);
wordBtn.addEventListener('click', hideWords);
translateBtn.addEventListener('click', hideTranslate);
exampleBtn.addEventListener('click', hideExample);