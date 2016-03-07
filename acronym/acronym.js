exports.parse = function (str) {
    return str.replace(/([\w])[A-Z]*[a-z]*[\W_]*/g, '$1').toUpperCase();
};