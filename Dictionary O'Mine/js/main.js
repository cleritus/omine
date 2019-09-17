const inputWord = document.querySelector('.word-input');
const inputTranslation = document.querySelector('.translation-input');
const inputExample = document.querySelector('.example-input');
const addBtn = document.querySelector('.add-btn');
const tbody = document.querySelector('.tbody');




const addTerm = (e) => {
  e.preventDefault();
  if ((inputWord.value === '') || (inputTranslation.value === '') || (inputExample.value === '')) return;

  const tr = document.createElement('tr');
  tbody.appendChild(tr);

  const tdWord = document.createElement('td');
  tr.appendChild(tdWord);
  tdWord.textContent = inputWord.value;

  const tdTranslation = document.createElement('td');
  tr.appendChild(tdTranslation);
  tdTranslation.textContent = inputTranslation.value;

  const tdExample = document.createElement('td');
  tr.appendChild(tdExample);
  tdExample.textContent = inputExample.value;


  inputWord.value = '';
  inputTranslation.value = '';
  inputExample.value = '';

}

addBtn.addEventListener('click', addTerm);