// Task 1 
function sum(a, b) {
    return a + b;
}

// Task 2 
function getPositiveNumbers(arr) {
    return arr.filter(number => number > 0);
}

// Task 3 
function getMaxOfFive(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}

// Task 4 
function getMaxFromArray(arr) {
    return Math.max(...arr);
}

// Task 5
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Task 6
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Task 7
const getPositiveEvenNumbers = (arr) => arr.filter(number => number > 0 && number % 2 === 0);

// Task 8
const getLongestString = (str1, str2) => str1.length >= str2.length ? str1 : str2;

// Task 9
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
