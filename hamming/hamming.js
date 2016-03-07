var Hamming = function () {
};

Hamming.prototype.compute = function (s1, s2) {
    if (s1.length !== s2.length) {
        throw new Error('DNA strands must be of equal length.')
    }

    // works but boring
    //var dif = 0;
    //for (var i = 0; i < s1.length; i += 1) {
    //    if (s1[i] !== s2[i]) {
    //        dif += 1;
    //    }
    //}
    //return dif;

    // let's try some fancy duck typing
    return [].filter.call(s1, function (val, i) {
        return val !== s2[i];
    }).length;
}

module.exports = Hamming;