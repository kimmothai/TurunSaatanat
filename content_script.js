// Some words are excluded since they do not work with the sentence structure well.
const SWEAR_WORDS = ['vittu', 'perkele', 'saatana', 'helvetti', 'jumalauta'];
// Only the marks that can appear at the end of a sentence.
const PUNCTUATION_MARKS = ['"', '.', '?', '!', "'"];

// No special decision process other than to practice arrow functions.
const pickRandomItemFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

// I usually prefer function over const because the intent is clearer with the keyword 'function'.
function findNonPunctuationIndex(title) {
  let j = title.length - 1;
  while (j >= 0) {
    if (!PUNCTUATION_MARKS.includes(title[j])) {
      return j;
    }
    j--;
  }
}

function updatedTitle(title) {
  const firstNonPunctuationIndex = findNonPunctuationIndex(title);
  const updatedTitle = `${title.slice(
    0,
    firstNonPunctuationIndex + 1
  )} ${pickRandomItemFromArray(SWEAR_WORDS)}${title.slice(
    firstNonPunctuationIndex + 1,
    title.length
  )}`;
  return updatedTitle;
}

// This is much easier to follow than the previous iteration. The inconsistent indentation was fixed too.
function addSatan() {
  let titles = document.getElementsByTagName('h1');
  for (let title in titles) {
    const newTitle = updatedTitle(titles[title].innerText);
    titles[title].innerText = newTitle;
  }
}

addSatan();
