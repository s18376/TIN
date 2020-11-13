const factorial = function (num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
};
console.log(factorial(3));

function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(factorialize(3));