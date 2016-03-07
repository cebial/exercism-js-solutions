var Triplet = module.exports = function (a, b, c) {
    this.a = a; this.b = b; this.c = c;
};

Triplet.prototype.sum = function () { return this.a + this.b + this.c; };
Triplet.prototype.product = function () { return this.a * this.b * this.c; };
Triplet.prototype.isPythagorean = function () {
    return this.a * this.a + this.b * this.b == this.c * this.c;
};

Triplet.where = function (options) {
    var min = options.minFactor || 3,
        max = options.maxFactor,
        sum = options.sum || 0,
        triplets = [], a, b, c;

    for (b = min; b < max; b += 1) {
        for (c = b + 1; c <= max; c += 1) {
            a = Math.sqrt(c * c - b * b);
            if ((!(a % 1) && a >= min) && a < b) {
                if (!sum || a + b + c == sum) {
                    triplets.push(new Triplet(a, b, c));
                }
            }
        }
    }

    //for (a = min; a <= max; a += 1) {
    //    aa = a * a;
    //    for (b = a + 1; b <= max; b += 1) {
    //        bb = b * b;
    //        for (c = b + 1; c <= max; c += 1) {
    //            if (aa + bb == c * c && (!sum || a + b + c == sum)) {
    //                triplets.push(new Triplet(a, b, c));
    //            }
    //        }
    //    }
    //}
    return triplets;
};

var time = new Date(); Triplet.where({maxFactor: 1000}); console.log((new Date()).getTime() - time.getTime());