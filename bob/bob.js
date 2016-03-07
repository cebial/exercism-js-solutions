var Bob = function() {};

Bob.prototype.hey = function(s) {
    if (s.trim() === '') { return 'Fine. Be that way!'; }
    if (s === s.toUpperCase() && /[A-Z]/.test(s)) { return 'Whoa, chill out!'; }
    if (s[s.length - 1] === '?') { return 'Sure.'; }
    return 'Whatever.';
};

module.exports = Bob;
