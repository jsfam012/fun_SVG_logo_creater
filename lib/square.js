// Import shape file
const Shape = require("./shape")

class Square extends Shape {
    render() {
        return  `<rect width="200" height="200" fill="${this.color}" />`
    }
}

// Export Square to index.js
module.exports = Square;