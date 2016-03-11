module.exports = function (num) {
    return {
        get digits () { return num.split('').map(Number); },
        slices: function (n) {
            return num.split('').reduce(function (a, _, i) {
                return num[i + n - 1] ? a.concat([num.substr(i, n).split('').map(Number)]) : a;
            }, []);
        },
        largestProduct: function (n) {
            if (n > num.length) throw Error('Slice size is too big.');
            if (!num || !n) return 1;

            return this.slices(n).reduce(function (max, tuple) {
                return Math.max(max, tuple.reduce(function (x, y) {
                    return x * y;
                }));
            }, 0);
        }
    }
};
