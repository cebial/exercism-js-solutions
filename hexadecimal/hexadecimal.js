var HexaDecimal = module.exports = function (number) {
    this.number = /^[0-9a-f]+$/.test(number) ? number : '0';
}

HexaDecimal.prototype.toDecimal = (function () {
    var map = {a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};

    return function () {
        return this.number.split('').reverse().reduce(function (total, number, i) {
            return (map[number] || +number) * Math.pow(16, i) + total;
        }, 0);
    }
}());