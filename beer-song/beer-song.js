var BeerSong = function () {};

// shared library of verses for all beer songs!
BeerSong.prototype.verses = {
    0: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
    1: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
    2: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
};

// create the verse if it doesn't exist yet
BeerSong.prototype.addVerse = function (n) {
    if (this.verses[n]) { return; }
    this.verses[n] = n + ' bottles of beer on the wall, ' + n + ' bottles of beer.\n'
        + 'Take one down and pass it around, ' + (n - 1) + ' bottles of beer on the wall.\n';
};

BeerSong.prototype.verse = function (n) {
    this.addVerse(n);
    return this.verses[n]
};

BeerSong.prototype.sing = function (start, end) {
    end = end || 0;

    var songs = [];
    for (var i = start; i >= end; i--) {
        songs.push(this.verse(i));
    }
    return songs.join('\n');
};

module.exports = BeerSong;