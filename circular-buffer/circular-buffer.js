var buffer = [], size = 0,
    emptyError = new Error('Buffer is empty.'),
    fullError = new Error('Buffer is full.'),
    API = {
        clear: clear,
        read: read,
        write: write.bind(null, false),
        forceWrite: write.bind(null, true)
    };

function read() {
    if (!buffer.length) { throw emptyError; }

    return buffer.shift();
}

function write(replace, value) {
    if (!value) { return; } // arbitrary

    if (buffer.length === size) {
        if (!replace) { throw fullError; }

        buffer.shift();
    }
    buffer.push(value);
}

function clear(slots) {
    size = slots || size;
    buffer.length = 0;
    return API;
}

module.exports = {
    circularBuffer: clear,
    bufferEmptyException: function () { return emptyError; },
    bufferFullException: function () { return fullError; }
};