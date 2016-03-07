var PhoneNumber = function (str) {
    this.pn = str.replace(/[^\d]/g, ''); // or [^0-9] (more readable?) or /\D/g (shortest!)

    if (this.pn.length === 11 && this.pn[0] === '1') {
        this.pn = this.pn.slice(1);
    }

    if (this.pn.length !== 10) {
        this.pn = '0000000000';
    }
};

PhoneNumber.prototype.number = function () {
    return this.pn;
};

PhoneNumber.prototype.areaCode    = function () {
    return this.pn.slice(0, 3);
};

PhoneNumber.prototype.toString = function () {
    return '(' + this.areaCode() + ') ' + this.pn.slice(3, 6) + '-' + this.pn.slice(6);
};

module.exports = PhoneNumber;