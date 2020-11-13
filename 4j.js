let defaultCompare = (a, b) =>
    a > b ? 1 : (a < b ? -1 : 0);

let binarySearch = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
    if (left > right) { return -1; }
    const middle = Math.floor((right + left) / 2);
    const comparison = compare(element, array[middle]);

    return (
        comparison === -1 ?
            binarySearch(array, element, compare, left, middle - 1)
            : comparison === 1 ?
                binarySearch(array, element, compare, middle + 1, right)
                :
                middle
    );
};

var arr = [];
for (i = 0; i <= 10; i++) {
    arr[i] = Math.floor(Math.random() * 10);
    process.stdout.write(arr[i] + '\t');
}
console.log();
for (i = 0; i < arr.length; i++)
    process.stdout.write(i + '\t');
console.log();
console.log(binarySearch(arr, 7));