function getSum (arr) {
    return arr.reduce(function (p, n) { return p + n; });
}

function getCheckValues (num) {
    return (num + '').split('').map(function (n, i, arr) {
        return (i + arr.length) % 2 ? +n : (n *= 2) > 9 ? n - 9 : n;
    });
}

module.exports = function (num) {
    this.checkDigit = +(num + '').slice(-1);
    this.addends    = getCheckValues(num);
    this.checksum   = getSum(this.addends);
    this.valid      = !(this.checksum % 10);
};

module.exports.create = function (num) {
    return +(num + '' + (getSum(getCheckValues(num * 10)) * 9) % 10);
};
