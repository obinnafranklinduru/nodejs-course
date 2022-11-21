const Circle = {
    area(r) {
        return Math.PI * r * r;
    },
    circum(r) {
        return 2 * Math.PI * r;
    }
}

module.exports = Circle;