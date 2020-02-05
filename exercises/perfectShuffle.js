/**
 * Given an array containing an EVEN number of elements, performs
 * a "perfect shuffle" and returns the shuffled array.
 *
 * See the README for a description of a perfect shuffle.
 *
 * See The sanity checks below for expected return values.
 */

function perfectShuffle(array) {
  console.log(array);
  let halfDeck = [];
  let newArray = [];
  let deckSize = array.length;
  let secondHalf = deckSize/2;
  for (let i = 0;i < array.length; i++)
  {
    if (i >= secondHalf)
    {
      halfDeck.push(array[i]);
    }
  }
 console.log(halfDeck);
 for (let j = 0;j < secondHalf;j++)
 {
   newArray.push(array[j],halfDeck[j]);
 }

 return newArray;
}

let sanityCheck = require('./sanityCheck');

if (require.main === module) {
  let input = ['A', 'B', 'C', 'D'];
  let expectedOutput = ['A', 'C', 'B', 'D'];
  sanityCheck(perfectShuffle(input), expectedOutput);

  input = [10, 20, 30, 40, 50, 60];
  expectedOutput = [10, 40, 20, 50, 30, 60];
  sanityCheck(perfectShuffle(input), expectedOutput);

  input = ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  expectedOutput = ['S', 'W', 'T', 'X', 'U', 'Y', 'V', 'Z'];
  sanityCheck(perfectShuffle(input), expectedOutput);

  input = [];
  expectedOutput = [];
  sanityCheck(perfectShuffle(input), expectedOutput);

  input = [87, 46];
  expectedOutput = [87, 46];
  sanityCheck(perfectShuffle(input), expectedOutput);
}
