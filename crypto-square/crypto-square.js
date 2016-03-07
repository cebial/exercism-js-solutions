module.exports = function (str) {
    var text = str.replace(/[\W_]/g, '').toLowerCase(),
        side = Math.ceil(Math.sqrt(text.length)),
        rows = text.match(new RegExp('.{1,'+side+'}', 'g')),
        code = [].reduce.call(text, function (a, char, i) {
            return a[i % side] += char, a; // dirty
        }, ''.split.call(Array(side),',')).join('');

    return {
        normalizePlaintext: function () { return text; },
        size: function () { return side; },
        plaintextSegments: function () { return rows; },
        ciphertext: function () { return code; }
    };
};