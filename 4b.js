function fib(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}
let num = 10;
console.log('Fib of ' + num + ' is:' + fib(num));