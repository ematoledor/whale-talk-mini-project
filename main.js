// phrase to translate to whale language.
let input = 'Hello, I am Emanuel. Currently living at La Casa Casa Merida.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

// loop to go over first array.
for (i = 0; i < input.length; i++) {
  // Loop to go through second array.
  for (j = 0; j < vowels.length; j++) {
    // Analyze is values are the same
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('EE');
      }
      else if (input[i] === 'u') {
        resultArray.push('UU');
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());