var Words = function () {
};

Words.prototype.count = function (str) {
    //dict = Object.create(null);
    //
    //str.trim().split(/\s+/).forEach(function (word) {
    //    dict[word] = (dict[word] || 0) + 1;
    //});
    //
    // return dict;

    // one-liner with reduce
    return str.trim().split(/\s+/).reduce(function (dict, word) {
        return (dict[word] = (dict[word] || 0) + 1, dict);
    }, Object.create(null));
};

module.exports = Words;