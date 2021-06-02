// phrase to translate to whale language.
let input = 'Hi, human.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

// // loop to go over first array.
// for (i = 0; i < input.length; i++) {
//   // Loop to go through second array.
//   for (j = 0; j < vowels.length; j++) {
//     // Analyze is values are the same
//     if (input[i] === vowels[j]) {
//       // Double the letter if its 'e' or 'u' and push any of the cases to new array.
//       if (input[i] === 'e') {
//         resultArray.push('EE');
//       }
//       else if (input[i] === 'u') {
//         resultArray.push('UU');
//       } else {
//         resultArray.push(input[i]);
//       }
//     }
//   }
// }

// REFACTORING PREVIOUS CODE TO USE FOR...OF >

for (const item of input) {
  for (const jtem of vowels) {
    if (item === jtem) {
      if (item === 'e') {
        resultArray.push('EE');
      }
      else if (item === 'u') {
        resultArray.push('UU');
      } else {
        resultArray.push(item);
      }
    }
  }
}


// brings string togetther and turns to upper case.
console.log(resultArray.join('').toUpperCase());

// All good