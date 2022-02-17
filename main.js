// variable with my age
const myAge = 29;

// changable variable for early years
let earlyYears = 2;

// reassigning the value of earlyYears
earlyYears *= 10.5;

// creating a new variable, since we've already accounted for the first two years
let laterYears = myAge - 2;

// calculating the number of dog years accounted by your later years
laterYears *= 4; 

// adding values of 2 variables to convert my age into the dog Years
const myAgeInDogYears = earlyYears + laterYears;

// myName variable with method taht returns a string with all lowercase letters
const myName = 'Alena'.toLowerCase();

// console.log("early years: ", earlyYears);
// console.log("later years: ", laterYears);
// console.log(myName);

// Displaying my age in dog years into the console with template literals
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

