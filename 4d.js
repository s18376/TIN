var sortAlphabets = function (text) {
    return text.toLowerCase().split('').sort().join('');
};

console.log(sortAlphabets("qwerty"))
console.log(sortAlphabets("CoolDab"))