var Trinary = module.exports = function (number) {
    this.number = /[^012]/.test(number) ? '0' : number;
};

Trinary.prototype.toDecimal = function () {
    return this.number.split('').reverse().reduce(function (total, number, i) {
        return +number * Math.pow(3, i) + total;
    }, 0);
};