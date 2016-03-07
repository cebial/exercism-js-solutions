var map = ['wink', 'double blink', 'close your eyes', 'jump'];

module.exports = function (secret) {
    // '0' isn't allowed either
    if (!+secret) throw Error('Handshake must be a number');

    var list = map.filter(function (_, i) {
        return secret & Math.pow(2, i);
    });

    this.commands = function () {
        return secret & 16 ? list.reverse() : list;
    }
};