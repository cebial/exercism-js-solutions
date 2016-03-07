var ETL = function () {};

ETL.prototype.transform = function (old) {
    return Object.keys(old).reduce(function (table, score) {
        old[score].forEach(function (char) {
            table[char.toLowerCase()] = +score;
        });
        return table;
    }, {});
};

module.exports = ETL;