var BigInt = require('./big-integer');

// more readable
module.exports = function () {
    return {
        square: function (n) {
            return BigInt(2).pow(n - 1).toString();
        },
        total: function () {
            return BigInt(2).pow(64).prev().toString();
        }
    };
};

// brute forcing and pre-filling the board is faster
// with a lot of tests, but not worth it otherwise
//var board = [BigInt(1)];
//for (var i = 1; i < 65; i += 1) {
//    board[i] = board[i - 1].multiply(2);
//}
//
//module.exports = function () {
//    return {
//        square: function (x) {
//            return board[x - 1].toString();
//        },
//        total: function () {
//            return board[64].prev().toString();
//        }
//    };
//};

