var Clock = function (h, m) {
    this.mins = h * 60 + (m || 0);
};

Clock.prototype.plus = function (m) {
    this.mins = (((this.mins + m) % 1440) + 1440) % 1440;
    return this;
};

Clock.prototype.minus = function (m) {
    return this.plus(-m);
};

Clock.prototype.toString = function () {
    return ('0' + ((this.mins / 60) | 0)).slice(-2)
        + ':' + ('0' + this.mins % 60).slice(-2);
};

Clock.prototype.equals = function (otherClock) {
    return this.mins === otherClock.mins;
};

exports.at = function (h, m) {
    return new Clock(h, m);
};

