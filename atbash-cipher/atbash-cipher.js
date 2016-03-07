exports.encode = function (str) {
    return str.toLowerCase().replace(/[\W_]/g, '').replace(/[a-z]/g, function (char) {
        return String.fromCharCode(219 - char.charCodeAt());
    }).replace(/(.{5})(?!$)/g, '$1 ');
}
