//Create a parent constructor for all shapes
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(newColor) {
        this.color = newColor;
    }
}

// Export Shape to all shapes
module.exports = Shape;