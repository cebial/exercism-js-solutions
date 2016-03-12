module.exports = function (num) {
    var digits = num.split('').map(Number);
    var slices = function (n) {
        if (n > num.length) throw Error('Slice size is too big.');

        return digits.reduce(function (a, _, i) {
            return num[i + n - 1] ? a.concat([digits.slice(i, i + n)]) : a;
        }, []);
    };
    var largestProduct = function (n) {
        return !n ? 1 : slices(n).reduce(function (max, tuple) {
            return Math.max(max, eval(tuple.join('*')));
        }, 0);
    };

    return { digits, slices, largestProduct };
};
