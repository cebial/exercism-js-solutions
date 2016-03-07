var map = ['eggs','peanuts','shellfish','strawberries',
           'tomatoes','chocolate','pollen','cats'];

module.exports = function (allergies) {
    var list = map.filter(function (_, i) {
        return allergies & Math.pow(2, i);
    });

    return {
        list: function () { return list; },
        allergicTo: function (str) { return list.indexOf(str); }
    };
}