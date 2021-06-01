// phrase to translate to whale language.

let input = 'Hello, I am Emanuel. Curreently living at La Casa Casa Merida.';

// Array of vowels.

const vowels = ['a', 'e', 'i', 'o', 'u'];

// Array that will contain related input.

let resultArray = [];

// loop to go through the arrays and evaluate. Also push related to new array.

for (i = 0; i < input.length; i++) {
  // console.log(input[i]);
  // testing output... working fine.
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee')
      }
    }
  }
}