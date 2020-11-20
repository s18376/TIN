function Student(fn, ln, id, grades) {
    this.firstName = fn;
    this.lastName = ln;
    this.id = id;
    this.grades = grades;
    this.avg = 0;

    {
        let avg = 0;
        let count = 0;
        for (i in this.grades) {
            avg += this.grades[i];
            count++;
        }
        avg = avg / count;
        this.avg = avg.toPrecision(2);
    }

    this.info = function () {
        console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nId: ${this.id}\nAvg grade: ${this.avg}`);
    }

    this.getAvg = function () {
        return this.avg;
    }

    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }

    this.setFullName = function (name) {
        let fn = name.split(' ');
        this.firstName = fn[0] || '';
        this.lastName = fn[1] || '';
    }

}

std1 = new Student('Vladyslav', 'Hrabets', 's18376', [4, 5, 3, 5, 4, 5])
std2 = new Student('Radyslav', 'Labets', 's17376', [5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 3, 5, 4])
std3 = new Student('Sviatoslav', 'Nobets', 's16376', [3, 3, 5])

std1.info();
console.log(std1.getAvg());
console.log();

std2.info();
console.log(std2.getFullName());
console.log();

std3.info();
std3.setFullName('roo VV');
console.log(std3.getFullName());