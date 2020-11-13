function secondGL(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

var arr = [];
for (i = 0; i <= Math.floor(Math.random() * 100); i++) {
    arr[i] = Math.floor(Math.random() * 10);
    console.log(arr[i]);
}
console.log(secondGL(arr));