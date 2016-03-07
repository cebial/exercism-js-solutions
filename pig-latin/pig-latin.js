exports.translate = function (str) {
    return str.replace(/([^aeoui\s(?:qu)]*(?:qu)*)(\S+)/g, '$2$1ay');
};