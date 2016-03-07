var FoodChain = function () {};

FoodChain.prototype.songBook = Object.create(null);

FoodChain.prototype.animals = {
    1: 'fly', 2: 'spider', 3: 'bird', 4: 'cat', 5: 'dog', 6: 'goat', 7: 'cow', 8: 'horse'
};

FoodChain.prototype.reactions = {
    2: 'It wriggled and jiggled and tickled inside her.',
    3: 'How absurd to swallow a bird!',
    4: 'Imagine that, to swallow a cat!',
    5: 'What a hog, to swallow a dog!',
    6: 'Just opened her throat and swallowed a goat!',
    7: 'I don\'t know how she swallowed a cow!'
};

FoodChain.prototype.verse = function (x) {
    if (this.songBook[x]) { return this.songBook[x]; }

    var v = 'I know an old lady who swallowed a ' + this.animals[x] + '.\n';

    if (x === 8) {
        return v + 'She\'s dead, of course!\n';
    }

    if (x > 1) {
        v += this.reactions[x] + '\n';
    }

    for (var i = x; i >= 2; i -= 1) {
        v += 'She swallowed the ' + this.animals[i] + ' to catch the ' + this.animals[i - 1]
            + (i === 3 ? ' that wriggled and jiggled and tickled inside her' : '') + '.\n';
    }

    v += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    return this.songBook[x] = v;
};

FoodChain.prototype.verses = function (start, end) {
    var song = '';
    for (var i = start; i <= end; i += 1) {
        song += this.verse(i) + '\n';
    }
    return song;
};

module.exports = FoodChain;