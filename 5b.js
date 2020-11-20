function Student(fn, ln, id, grades) {
    this.firstName = fn;
    this.lastName = ln;
    this.id = id;
    this.grades = grades;

    this.info = function () {
        let avg = 0;
        let count = 0;
        for (i in this.grades) {
            avg += this.grades[i];
            count++;
        }
        avg = avg / count;
        console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nId: ${this.id}\nAvg grade: ${avg.toPrecision(2)}\n`);
    }
}

std1 = new Student('Vladyslav', 'Hrabets', 's18376', [4, 5, 3, 5, 4, 5])
std2 = new Student('Radyslav', 'Labets', 's17376', [5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 3, 5, 4])
std3 = new Student('Sviatoslav', 'Nobets', 's16376', [3, 3, 5])

std1.info();
std2.info();
std3.info();