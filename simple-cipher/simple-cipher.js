module.exports = function (key) {
    // helper functions for dealing with the annoying character codes
    function toCode(char) { return char.charCodeAt() - 97; }
    function toChar(char) { return String.fromCharCode(char + 97); }

    function encode(str) {
        return [].reduce.call(str, function (result, char, i) {
            return result + toChar((toCode(char) + toCode(key[i])) % 26);
        }, '');
    }

    function decode(str) {
        return [].reduce.call(str, function (result, char, i) {
            return result + toChar((((toCode(char) - toCode(key[i])) % 26) + 26) % 26);
        }, '');
    }

    if (typeof key === 'undefined') {
        key = '';
        for (var i = 0; i < 100; i += 1) { // generate a random key
            key += toChar(Math.floor(Math.random() * 26));
        }
    } else if (!/^[a-z]+$/.test(key)) {
        throw new Error('Bad key');
    }

    return {key, encode, decode};
}