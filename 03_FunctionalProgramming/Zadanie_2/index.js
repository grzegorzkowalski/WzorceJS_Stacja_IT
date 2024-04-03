const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const getEvenNumbers = (tab) => tab.filter(el => el % 2 === 0);
const sumEvenNumbers = (tab) => tab.reduce((prev, cur) => prev + cur);
const multipyScore = (num) => Math.floor(Math.random() * (10 - 1) + 1) * num;
const checkScore = (num) => {
    if (num > 99) {
        console.log(`${num} - to całkiem duża liczba.`);
    }
    else {
        console.log(`${num} - to małą liczba.`);
    }
};

const evenNumbers = getEvenNumbers(numbers);
const sum = sumEvenNumbers(evenNumbers);
const multiply = multipyScore(sum);
checkScore(multiply);

// checkScore(multipyScore(sumEvenNumbers(getEvenNumbers(numbers))));




