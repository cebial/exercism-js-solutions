module.exports = function (number) {
    number = /[^0-7]/.test(number) ? '0' : number;

    return { toDecimal: function () {
        return number.split('').reverse().reduce(function (total, number, i) {
            return +number * Math.pow(8, i) + total;
        }, 0);
    }};
};