let termArr = [];

class Term {
  constructor(word, translate, example) {
    this.word = word,
      this.translate = translate,
      this.example = example
  }

  pushTerm = function () {
    termArr.push(this)
  }
}

const localTerms = () => {
  if (localStorage.key(name) === 'Dictionary') {
    const startArr = JSON.parse(localStorage.getItem('Dictionary'));
    termArr = termArr.concat(startArr);
  } else return
}

localTerms();


function starter() {
  for (let i = 0; i < termArr.length; i++) {

    const {
      tdWord,
      tdTranslate,
      tdExample
    } = createTable();

    tdWord.textContent = termArr[i].word;
    tdTranslate.textContent = termArr[i].translate;
    tdExample.textContent = termArr[i].example
  }
}
starter();