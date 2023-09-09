//===========================================1===========================================
function sum(arr) {
    const filteredArray = arr.filter(element => element > 20);

    const sum = filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}

// Example usage:
const numbers = [10, 25, 5, 30, 15];
const result = sum(numbers);
console.log(result); // Output: 55 (25 + 30)

//===========================================2===========================================
const getNewArray = function (strArray) {
    const newArray = strArray.filter(str => str.length >= 5 && str.includes('a'));

    return newArray;
}

const words = ["apple", "banana", "cherry", "grape", "apricot"];
const filteredWords = getNewArray(words);
console.log(filteredWords);
