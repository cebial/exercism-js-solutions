var DnaTranscriber = function () {},
    map = { G:'C', C:'G', T:'A', A:'U' };

DnaTranscriber.prototype.toRna = function (str) {
    return str.replace(/./g, function (m) {
        return map[m];
    });
};
1
module.exports = DnaTranscriber;