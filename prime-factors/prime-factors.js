exports.for = function (n) {
    var rest, factor = 2, factors = [];

    while (n > 1) {
        rest = n / factor;
        if (rest % 1) {
            factor += 1;
        } else {
            n = rest;
            factors.push(factor);
        }
    }

    return factors;
}