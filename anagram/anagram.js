var Anagram = function (str) {
    this.base = str.toLowerCase();
    this.sorted = this.stringSort(this.base);
};

Anagram.prototype.stringSort = function (str) {
    return str.split('').sort().join('');
};

Anagram.prototype.matches = function (matches) {
    if (typeof matches === 'string') {
        matches = [].slice.call(arguments);
    }

    return matches.filter(function (s) {
        s = s.toLowerCase();
        return this.stringSort(s) === this.sorted && s !== this.base;
    }, this);
};

module.exports = Anagram;