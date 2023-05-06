function isPrime(n) {
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimes(n) {
    let prime_counter = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            prime_counter++;
        }
    }
    return prime_counter;
}

let number = parseInt(prompt("Please provide me with a number. I will tell you how many prime numbers there are between 1 and the number you provide (excluding it)"));
let prime_counter = countPrimes(number);
alert(`There are ${prime_counter} prime numbers between 1 and ${number}`);