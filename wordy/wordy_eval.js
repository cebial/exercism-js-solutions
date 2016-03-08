exports.WordProblem = function (question) {
    return {
        answer: function () {
            // With normal operator precedence (and disregarding the error
            // cases) this would work:
            return eval(question.replace(/[a-z?]+/gi, function (str) {
                return {plus: '+', minus: '-', multiplied: '*', divided: '/'}[str] || '';
            }));
        }
    };
};

exports.ArgumentError = function () { return Error('This is madness!'); };
