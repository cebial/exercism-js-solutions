var School = function () {
    this.kids = Object.create(null);
};

School.prototype.add = function (name, grade) {
    this.kids[grade] = this.kids[grade] || [];
    this.kids[grade].push(name);
    this.kids[grade].sort();
};

School.prototype.roster = function () {
    return this.kids;
};

School.prototype.grade = function (grade) {
    return this.kids[grade] || [];
};

module.exports = School;