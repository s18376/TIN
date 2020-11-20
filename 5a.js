const car = new Object();
car.plate = 'ASAS541566das';
car.year = 1996;
car.color = 'yellow';
car.engine = false;
car.changeColor = function (str) {
    this.color = str;
    console.log('New color: ' + this.color);
}
console.log(car);
car.changeColor('black');
console.log();

const car1 = {
    plate: 'ASD545gASF',
    year: 1934,
    coloe: 'indigo',
    engine: false,
    engineStart: function () {
        if (!this.engine) {
            this.engine = true;
            return console.log('Engine started');
        }
    }
}
// console.log(car1);
car1.engineStart();
// console.log(car1);
// console.log(Object.keys(car1));

function whatIs(obj) {
    const args = Object.keys(obj)
    for (i in args)
        if (typeof obj[args[i]] === 'function')
            console.log(obj[args[i]])
        else console.log(`(${typeof obj[args[i]]})${args[i]}: ${obj[args[i]]}`)
}
whatIs(car1);
// console.log(car1.engineStart);