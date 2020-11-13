function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(palindrome("It's a Bird, It's a Plane, It's Superman!"));
console.log(palindrome("eye,eye"));