class Student {
    constructor(fn, ln, id, grades) {
        this.firstName = fn;
        this.lastName = ln;
        this.id = id;
        this.grades = grades;
        this.avg = this.calcAvg();
    }

    info() {
        console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nId: ${this.id}\nAvg grade: ${this.avg}`);
    };

    get Avg() {
        return this.avg;
    };

    get FullName() {
        return this.firstName + ' ' + this.lastName;
    };

    set FullName(name) {
        let fn = name.split(' ');
        this.firstName = fn[0] || '';
        this.lastName = fn[1] || '';
    };

    calcAvg() {
        let avg = 0;
        for (let i = 0; i < this.grades.length; i++) {
            avg += this.grades[i];
        }
        avg = avg / this.grades.length;
        return avg.toPrecision(2);
    }
}

std1 = new Student('Vladyslav', 'Hrabets', 's18376', [4, 5, 3, 5, 4, 5])
std2 = new Student('Radyslav', 'Labets', 's17376', [5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 3, 5, 4])
std3 = new Student('Sviatoslav', 'Nobets', 's16376', [3, 3, 5])

std1.info();
console.log(std1.Avg);
console.log();

std2.info();
console.log(std2.FullName);
console.log();

std3.info();
std3.FullName = 'roo VV';
console.log();
// console.log(std3.FullName);
std3.info();