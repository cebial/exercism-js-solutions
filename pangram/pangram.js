var Pangram = function (str) {
    this.str = str.toLowerCase();
};

Pangram.prototype.isPangram = function () {
    return [].every.call('abcdefghijklmnopqrstuvwxyz', function (char) {
        return ~this.str.indexOf(char);
    }, this);
};

// replace with regexps yay
Pangram.prototype.isPangramReplaceRegexp = function () {
    return this.str.replace(/[^a-z]|([a-z])(?=.*\1)/g, '').length === 26;
};

// my first solution
Pangram.prototype.isPangramReplace = function () {
    var az = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0, len = this.str.length; i < len; i += 1) {
        az = az.replace(this.str[i], '');
        if (!az.length) { return true; }
    }
    return false;
};

// simpler
Pangram.prototype.isPangramSimple = function () {
    for (var i = 0, len = 26; i < len; i += 1) {
        if (!~this.str.indexOf('abcdefghijklmnopqrstuvwxyz'[i])) { return false; }
    }
    return true;
};

// filling a dictionary object, similar approach to the word-count oneliner
Pangram.prototype.isPangramDict = function () {
    return Object.keys([].reduce.call(this.str.replace(/[^a-z]/g, ""), function (dict, char) {
            return (dict[char] = 1, dict);
        }, Object.create(null))).length === 26;
}

Pangram.prototype.isPangramRegex = function () {
    // Trying to understand this regex I found: /([a-z])(?!.*\1)/g, adding some
    // parentheses made it clearer for me: /([a-z])(?!(.*\1))/g

    // ([a-z])  Matches any lower case letter and captures into capture group 1.

    // .*       Matches any char zero or more times (except \n).

    // \1       This will be equal to the letter found with ([a-z]) (back reference).

    // x(?!y)   Matches 'x' only if 'x' is _not_ followed by 'y' (negated lookahead).
    //          In this expression: 'x' === ([a-z]) and 'y' === (.*\1)
    //          For example:        'x' === 'a'    then 'y' === (.*a)

    // g        The global flag: keep searching until we've looked at the whole string.

    // So /([a-z])(?!(.*\1))/g will first find a letter with ([a-z]), then search the
    // string for another occurrence of this letter with (.*\1). If another occurrence
    // is found, this will not be considered a match, so only the last letter found of
    // each type will be saved to the match-array.

    // If we got 26 matches, we found the whole alphabet.
    return (this.str.match(/([a-z])(?!.*\1)/g) || []).length === 26;
};

module.exports = Pangram;