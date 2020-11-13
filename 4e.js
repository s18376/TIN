function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWordN = 0;
    var longestWord = '';
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWordN) {
            longestWordN = strSplit[i].length;
            longestWord = strSplit[i];
        }
    }
    return console.log("Longest word: " + longestWord + "\nOf length: " + longestWordN);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.");