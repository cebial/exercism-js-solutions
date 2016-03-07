var map = 'IVXLCDM', numerals = [];

for (var j = 0; j < 4; j += 1) {
    var I = map[j * 2],
        V = map[j * 2 + 1],
        X = map[j * 2 + 2];

    numerals[j] = {
        0: '',
        1: I,
        2: I + I,
        3: I + I + I,
        4: I + V,
        5: V,
        6: V + I,
        7: V + I + I,
        8: V + I + I + I,
        9: I + X
    };
}

module.exports = function (number) {
    return (number + '').split('').reverse().reduce(function (output, n, idx) {
        return numerals[idx][n] + output;
    }, '');
};