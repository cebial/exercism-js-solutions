module.exports = function (n) {
    return {
        squareOfSums: Math.pow(n * (n + 1) / 2, 2),
        sumOfSquares: n * (n + 1) * (2 * n + 1) / 6,
        get difference () { return this.squareOfSums - this.sumOfSquares; }
    };
};

