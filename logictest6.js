
// logit test soal nomor enam
// "I am A Great human"
// into
// "I ma A Taerg namuh"

// // note: observe the Capital word behavior. Capital only when in the first letter

function reverseWord(){

let nama = "I am A Great human";
balikNama = ""
//buat supaya nama[i] berawal dari paling huruf paling belakang (length) ke huruf paling depan
for (var i = nama.length-1 ; i >= 0; i--) {
 balikNama += nama[i];
}
    console.log(balikNama)
};
reverseWord();

// RESOLVE
const sentence = "I am A Great human";

function reverseWord(sentence) {
  const result = []; // define variable for result
  const words = sentence.split(" "); // split sentence

  // loop words and give any conditions
  let index = 0;
  for (const word of words) {
    let newWord = word;
    if (word.length > 1) {
      const wordOriginal = word.split("");
      const wordReverse = word.split("").reverse();
      if (
        wordOriginal[0] === wordReverse[wordReverse.length - 1].toUpperCase()
      ) {
        newWord = `${wordReverse[0].toUpperCase()}${wordReverse
          .join("")
          .slice(1, wordReverse.length)
          .toLowerCase()}`;
      } else {
        newWord = wordReverse.join("");
      }
    }

    result.push(newWord);
    index++;
  }

  return result.join(" "); // return result
}

console.log(reverseWord(sentence));
