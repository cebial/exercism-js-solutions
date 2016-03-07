var rainSounds = {3: 'Pling', 5: 'Plang', 7: 'Plong'},
    Raindrop = module.exports = function () {};

Raindrop.prototype.convert = function (n) {
    return Object.keys(rainSounds).reduce(function (song, factor) {
            return song + (n % factor ? '' : rainSounds[factor]);
        }, '') || n.toString();

    // more fun looking:
    //return [3,5,7].reduce(function (song, factor, i) {
    //        return song + (n % factor ? '' : 'Pl'+['i','a','o'][i]+'ng');
    //    }, '') || n.toString();
};

