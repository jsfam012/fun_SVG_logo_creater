// Import shape file

const Shape = require("./shape")

class Circle extends Shape {
    render() {
        return  `<circle cx="100" cy="100" r="80" fill="${this.color}" />`
    }
}

// Export Circle to index.js
module.exports = Circle;