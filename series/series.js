module.exports = function (str) {
    return {
        digits: str.split('').map(Number),
        slices: function (n) {
            if (n > str.length) throw Error('Slice size is too big.');

            return this.digits.reduce(function (series, _, i, arr) {
                return i + n > str.length ? series : series.concat([arr.slice(i, i + n)]);
            }, []);
        }
    };
};