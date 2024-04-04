const onlyPrimeNumbers = () => {
    const numbers = [];
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    return {
        addPrimeNumber: (checkNum) => {
            isPrime(checkNum) ? numbers.push(checkNum) : false
        },
        returnPrimeNumbers: () => numbers
    }
}

const testFunc = onlyPrimeNumbers();

testFunc.addPrimeNumber(3);
testFunc.addPrimeNumber(4);
testFunc.addPrimeNumber(7);
console.log(testFunc.returnPrimeNumbers());