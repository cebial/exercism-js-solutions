var doMath = {
    'plus':          function (a, b) { return a + b; },
    'minus':         function (a, b) { return a - b; },
    'multiplied by': function (a, b) { return a * b; },
    'divided by':    function (a, b) { return a / b; }
};

exports.WordProblem = function (question) {
    return {
        answer: function () {
            var parts = question.match(/[a-z ]+|[0-9-]+/gi).slice(1);

            if (!parts[2]) { throw exports.ArgumentError(); } // arbitrary

            return parts.reduce(function (res, val, i) {
                return +val ? res : doMath[val.trim()](res, +parts[i + 1]);
            }, +parts[0]);
        }
    };
};

exports.ArgumentError = function () { return Error('This is madness!'); };
