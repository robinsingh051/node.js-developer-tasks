const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error('Array must contain only integers.');
    }
    sum += arr[i];
  }

  return sum;
}

rl.question('Enter numbers separated by spaces: ', (input) => {
  try {
    const inputArray = input.split(' ').map(Number);
    const result = sumOfNumbers(inputArray);
    console.log('Sum:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }

  rl.close();
});
