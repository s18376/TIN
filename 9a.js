const express = require("express");
const app = express();

app.use(express.json());

var Calculator = function (num) {
    this.num = num;
};

Calculator.prototype = {
    add: function (n) {
        const result = Math.floor(this.num + n);
        results.add({ num1: this.num, num2: n, operation: "add", res: result });
        this.num = result;
        return this;
    },
    subtract: function (n) {
        const result = Math.floor(this.num - n);
        results.add({
            num1: this.num,
            num2: n,
            operation: "subtract",
            res: result
        });
        this.num = result;
        return this;
    },
    multiply: function (n) {
        const result = Math.floor(this.num * n);
        results.add({
            num1: this.num,
            num2: n,
            operation: "multiply",
            res: result
        });
        this.num = result;
        return this;
    },
    divide: function (n) {
        var result = Math.floor(this.num / n);
        results.add({ num1: this.num, num2: n, operation: "divide", res: result });
        return this;
    },
    clear: function () {
        this.num = 0;
        return this;
    }
};

var results = (function () {
    var results = [];

    return {
        add: function (obj) {
            results.push(obj);
        },
        get: function () {
            return results;
        },
        clear: function () {
            results = [];
        }
    };
})();

app.post("/calculator", (req, res) => {
    num1 = parseInt(req.body.num1);
    num2 = parseInt(req.body.num2);
    func = parseInt(req.body.func);

    var request = new Calculator(num1);

    switch (func) {
        case 1:
            request.add(num2);
            break;
        case 2:
            request.subtract(num2);
            break;
        case 3:
            request.multiply(num2);
            break;
        case 4:
            request.divide(num2);
            break;
        default:
            results.clear();
            break;
    }

    const calcResult = results.get();

    res.json(calcResult);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));