var AE = exports.ArgumentError = function () { return Error('Bad form.'); };

exports.WordProblem = function (question) {
    return {
        answer: function () {
            var p = '', map = {plus: '+', minus: '-', multiplied: '*', divided: '/'};
            return eval([question.replace(/[a-z?]+/gi, function (str) {
                return map[str] ? (p += '(', ')' + map[str]) : '';
            })].reduce(function (_, s) { if (!p) throw AE(); return p + s; }, ''));
        }
    };
};
