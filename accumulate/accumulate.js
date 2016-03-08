module.exports = function (array, callback) {
    var result = [];
    for (var i = 0, len = array.length; i < len; i += 1) {
        result.push(callback(array[i]));
    }
    return result;
};
