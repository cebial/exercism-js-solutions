var Gigasecond = function (d) {
    this.gigaDate = new Date(+d + 1e12);
};

Gigasecond.prototype.date = function () {
    return this.gigaDate;
};

module.exports = Gigasecond;