//After click show or hide columns
// Words

wordBtn.addEventListener('click', function () {
  const tds = [...document.querySelectorAll('td')];

  let n = 3;
  let tdNew = [];
  for (let i = 0; i < (tds.length / 3) - 1; i++) {

    tdNew.push(tds[n]);
    n += 3;
  }

  tdNew.forEach(td => td.classList.toggle('hidden'));
})

//Translate

translateBtn.addEventListener('click', function () {
  const tds = [...document.querySelectorAll('td')];

  let n = 4;
  let tdNew = [];
  for (let i = 0; i < (tds.length / 3) - 1; i++) {

    tdNew.push(tds[n]);
    n += 3;
  }

  tdNew.forEach(td => td.classList.toggle('hidden'));
})

// Example sentence

exampleBtn.addEventListener('click', function () {
  const tds = [...document.querySelectorAll('td')];

  let n = 5;
  let tdNew = [];
  for (let i = 0; i < (tds.length / 3) - 1; i++) {

    tdNew.push(tds[n]);
    n += 3;
  }

  tdNew.forEach(td => td.classList.toggle('hidden'));
})