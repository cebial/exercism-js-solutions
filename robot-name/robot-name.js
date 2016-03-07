var Robot = function () {
    this.reset();
};

Robot.prototype.used = Object.create(null);

Robot.prototype.reset = function () {
    do {
        this.name = this.genChar() + this.genChar()
            + ('00' + Math.floor(1000 * Math.random())).slice(-3);
    } while (this.used[this.name]);

    this.used[this.name] = true;
};

Robot.prototype.genChar = function () {
    // char codes: A = 65, Z = 90
    return String.fromCharCode(Math.floor(26 * Math.random()) + 65);
}


module.exports = Robot;