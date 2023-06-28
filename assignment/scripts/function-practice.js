console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
/*
let name = "Jenny";
function helloName(name) {
  return 'Hello, ' + name + '!';
}
console.log(helloName(name));
// Remember to call the function to test
*/
function helloName(name){
  return `Hello, ${name}!`;
}
console.log('Saying hello!', helloName('Jenny'));
// Calling our helloName function while inserting a name when calling it.


// 3. Function to add two numbers together & return the result
let numOne = 5; 
let numTwo = 4;

function addNumbers(firstNumber) {
  return numOne + numTwo;

  // return firstNumber + secondNumber;
}
console.log('Adding two numbers:', addNumbers());
//callig our addNumbers function in our console.log with desrciption.


// 4. Function to multiply three numbers & return the result
let a = 2;
let b = 3;
let c = 4;

function multiplyThree() {
  return a * b * c;
}
console.log('Multiplying three numbers:', multiplyThree());
// calling our multiplyThrere function in our console.log with desrciption.


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else{
  return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive for # 3 - should say true:', isPositive(3),);
console.log('isPositive for # 0 - should say false:', isPositive(0));
console.log('isPositive for # -3 - should say false:', isPositive(-3));
// All three logs above call a number & our isPositive function correctly outputs each.


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array = [1, 2, 3, 4];

function getLast(array) {
    return array[array.length - 1];
  if (array.length === 0){
    return undefined;
  }
}
console.log('Our last item in our array is', getLast(array));
console.log('If undefined is stated as our last item, the array is empty.');


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++){
    if (value === array[i]){
      return true;
    }
  }
  return false;
}

console.log('Value 1 is in the array', find(1, array));
console.log('Value 2 is in the array', find(2, array));
console.log('Value 3 is in the array', find(3, array));
console.log('Value 4 is in the array', find(4, array));
console.log('Value 5 is in the array', find(5, array));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let fruits = "apple, banana, grapes, strawberry"

function isFirstLetter(letter, string) {
    if (fruits.startsWith(letter)){
      return true;
    }
    else{
      return false;
    }
}

isFirstLetter('a', fruits);// calling our function with a and fruits array

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));




// 9. Function to return the sum of all numbers in an array
let numArray = [1, 2, 3, 4, 5];

function sumAll(numArray) {
  let sum = 0;
  // TODO: loop to add items
  for (let num = 0; num < numArray.length; num++){
      sum += numArray[num];
  }// for loop to run each number in the array through adding each loop through.
  return sum;
  // TODO: return the sum
}
sumAll(numArray); // calling our function
console.log(sumAll(numArray));// logging our sum in our console


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}