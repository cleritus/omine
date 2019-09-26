const inputWord = document.querySelector('.word-input');
const inputTranslate = document.querySelector('.translate-input');
const inputExample = document.querySelector('.example-input');
const addBtn = document.querySelector('.add-btn');
const tbody = document.querySelector('.tbody');

const wordBtn = document.querySelector('.word-btn');
const translateBtn = document.querySelector('.translate-btn');
const exampleBtn = document.querySelector('.example-btn');

const banner = document.querySelector('.slider');
const pauseBtn = document.querySelector('.pause-btn');

const time = 2000;

// Create main table

function createTable() {
  const tr = document.createElement('tr');
  tbody.appendChild(tr);

  const tdWord = document.createElement('td');
  tr.appendChild(tdWord);

  const tdTranslate = document.createElement('td');
  tr.appendChild(tdTranslate);

  const tdExample = document.createElement('td');
  tr.appendChild(tdExample);
  return {
    tdWord,
    tdTranslate,
    tdExample,
    tr,
  };
}

// Add terms to the dictionary

const addTerm = (e) => {
  e.preventDefault();
  if ((inputWord.value === '') || (inputTranslate.value === '') || (inputExample.value === '')) return;

  const newTerm = new Term(inputWord.value, inputTranslate.value, inputExample.value);
  newTerm.pushTerm();
  localStorage.setItem('Dictionary', JSON.stringify(termArr));

  const {
    tdWord,
    tdTranslate,
    tdExample
  } = createTable();

  tdWord.textContent = inputWord.value;
  tdTranslate.textContent = inputTranslate.value;
  tdExample.textContent = inputExample.value;

  inputWord.value = '';
  inputTranslate.value = '';
  inputExample.value = '';
}

//After click show or hide columns



// Change words in a main banner - setInterval

let index = 0;

const show = () => {
  if (index === termArr.length) {
    index = 0;
  }
  banner.textContent = termArr[index].word;
  index++;
};

const slider = () => (termArr.length === 0) ? banner.textContent = 'Put your first term' : show();

let sliderInterval = setInterval(slider, time);
let active = false;

const stopInterval = () => {
  if (!active) {
    clearInterval(sliderInterval);
    pauseBtn.style.backgroundColor = 'cornflowerblue';
    pauseBtn.style.color = '#fefefe';
    active = !active;
  } else if (active) {
    sliderInterval = setInterval(slider, time);
    pauseBtn.style.backgroundColor = 'transparent';
    pauseBtn.style.color = 'cornflowerblue';
    active = !active;
  }
}

addBtn.addEventListener('click', addTerm);