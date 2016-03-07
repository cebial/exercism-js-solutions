var Binary = module.exports = function (number) {
    this.number = /^[01]+$/.test(number) ? number : '0';
}

Binary.prototype.toDecimal = function () {
    return this.number.split('').reverse().reduce(function (total, number, i) {
        return +number * Math.pow(2, i) + total;
    }, 0);
}