/**
 * Represents a Luhn-number.
 *
 * The LUHN-10 Algorithm is part of a standard (ISO-7812-1) used worldwide for various credit cards.
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 * @see http://www.ee.unb.ca/tervo/ee4253/luhn.shtml
 *
 * @constructor
 * @this {Luhn}
 * @param {number} num The number to check
 */
var Luhn = function (num) {
    this.checkDigit = +(num + '').slice(-1);
    this.addends = Luhn.getCheckValues(num, true);
    this.checksum = Luhn.getSum(this.addends);
    this.valid = !(this.checksum % 10);
};

/**
 * Create a valid number by adding a check digit.
 *
 * @param {number} num The number to generate a check digit for
 * @return {number} The number including the check digit
 * @override
 * @static
 */
Luhn.create = function (num) {
    var checkValues = Luhn.getCheckValues(num, false),
        checkDigit = (Luhn.getSum(checkValues) * 9) % 10;

    return +(num + '' + checkDigit);
};

/**
 * Calculate the sum of all the values in the array.
 *
 * @param {Array} arr The array with the values
 * @return {number} The sum of all the values
 * @static
 */
Luhn.getSum = function (arr) {
    return arr.reduce(function (prev, next) {
        return prev + next;
    });
};

/**
 * Calculate the check values for all the digits of a given number.
 *
 * @param {number} num The number to generate check values for
 * @param {boolean} hasCheckDigit Does the provided number have a check digit already?
 * @return {Array} All the calculated check values.
 * @static
 */
Luhn.getCheckValues = function (num, hasCheckDigit) {
    var digits = (num + '').split(''),
        numDigits = digits.length;

    return digits.map(function (digit, i) {
        if ((i + numDigits + hasCheckDigit) % 2) {
            digit = 2 * digit;
            if (digit > 9) {
                digit -= 9;
            }
        }

        return +digit;
    });
};

module.exports = Luhn;
