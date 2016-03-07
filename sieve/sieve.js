module.exports = function (max) {
    var i, j, list = [];
    for (i = 2; i <= max; i += 1) {
        list[i] = i;
    }

    for (i = 2; i <= max; i += 1) {
        if (!list[i]) { continue; }
        for (j = i * i; j <= max; j += i) {
            list[j] = 0;
        }
    }

    list = list.filter(function (x) { return x; });

    return { primes: list };
}