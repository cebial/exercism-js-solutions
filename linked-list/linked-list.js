var Node = function (value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;

    // this logic should be in List I guess
    this.prev && (this.prev.next = this);
    this.next && (this.next.prev = this);
};

var List = module.exports = function () {
    this.elementCount = 0;
    this.first = null;
    this.last = null;
};

List.prototype.push = function (value) {
    this.last = new Node(value, this.last);
    this.first || (this.first = this.last);
    this.elementCount += 1;
};

List.prototype.unshift = function (value) {
    this.first = new Node(value, null, this.first);
    this.last || (this.last = this.first);
    this.elementCount += 1;
};

List.prototype.pop = function () {
    if (!this.elementCount) return;

    var value = this.last.value;

    this.last.prev && (this.last.prev.next = null);
    this.last = this.last.prev || null;
    this.elementCount -= 1;

    return value;
};

List.prototype.shift = function () {
    if (!this.elementCount) return;

    var value = this.first.value;

    this.first.next && (this.first.next.prev = null);
    this.first = this.first.next || null;
    this.elementCount -= 1;

    return value;
};

List.prototype.count = function () {
    return this.elementCount;
};

List.prototype.delete = function (value) {
    var current = this.first;

    while (current) {
        if (current.value === value) {
            current.prev && (current.prev.next = current.next);
            current.next && (current.next.prev = current.prev);
            this.elementCount -= 1;
        }
        current = current.next;
    }
};
