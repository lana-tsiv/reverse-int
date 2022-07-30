module.exports = function reverse(n) {
    if (n < 0) return Number([...n.toString()].slice(1).reverse().join(""));
    return Number([...n.toString()].reverse().join(""));
};
