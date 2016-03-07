exports.keep = function (set, callback) {
    return set.reduce(function (result, value) {
        return callback(value) && result.push(value), result;
    }, []);
};

exports.discard = function (set, callback) {
    return exports.keep(set, function (val) { return !callback(val); });
};
