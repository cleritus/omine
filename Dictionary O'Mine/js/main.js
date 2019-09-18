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

const banner = document.querySelector('.slider');
const pauseBtn = document.querySelector('.pause-btn');

const time = 2000;

// Add terms to the dictionary

const addTerm = (e) => {
  e.preventDefault();
  if ((inputWord.value === '') || (inputTranslate.value === '') || (inputExample.value === '')) return;

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

// Change words in a main banner - setInterval

let index = 0;

const show = () => {
  if (index === wordArray.length) {
    index = 0;
  }
  banner.textContent = wordArray[index].textContent;
  index++;
};

const slider = () => (wordArray.length === 0) ? banner.textContent = 'Put your first term' : show();

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
wordBtn.addEventListener('click', hideWords);
translateBtn.addEventListener('click', hideTranslate);
exampleBtn.addEventListener('click', hideExample);
pauseBtn.addEventListener('click', stopInterval);