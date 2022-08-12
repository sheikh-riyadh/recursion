/* Here we will try to get factorial number using recursion fucnton */

function factorial(fac) {
    if (fac === 1) {
        return 1;
    }
    else {
        return fac * factorial(fac - 1);
    }
}

const resultOfFactorial = factorial(5);
console.log(resultOfFactorial);


/* Here we will try to get total of sum using recursion fucnton */


function sum(number) {
    if (number === 1) {
        return 1;
    }
    else {
        return number + sum(number - 1);
    }
}


const totalSumOf = sum(5);
console.log(totalSumOf);