function Student() {
    this.courses = [
        'GRK',
        'ZPR',
        'BYT'
    ];
}

function NewStd(fn, ln, id) {
    Student.call(this);

    this.firstName = fn;
    this.lastName = ln;
    this.id = id;
}
NewStd.prototype = new Student();

std1 = new NewStd('Vladyslav', 'Hrabets', 's18376');
std2 = new NewStd('Radyslav', 'Labets', 's17376');
std3 = new NewStd('Sviatoslav', 'Nobets', 's16376');
console.log(std1);
console.log(std2);
console.log(std3);