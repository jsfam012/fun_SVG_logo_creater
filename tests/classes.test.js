const Square = require("../lib/square")
const Triangle = require("../lib/triangle")
const Circle = require("../lib/circle")

describe("Test for Square class", function() {
    it("should create a Square object with the correct color", function() {
        // test value initialization
        const testColor = "blue";

        // process that you want to test
        const newSquare = new Square()
        newSquare.setColor(testColor)

        // conclusion
        expect(newSquare.color).toBe(testColor)
    })


    it("should render the correct shape code", function() {
        // test value initialization
        const testColor = "blue";

        // process that you want to test
        const newSquare = new Square(testColor)
        const squareCode = newSquare.render();

        // conclusion
        expect(squareCode).toBe(`<rect width="200" height="200" fill="${testColor}" />`)
    })
})

describe("Test for Triangle class", function() {
    it("should create a Triangle object with correct color", function() {
        // test value initialization
        const testColor = "red";

        //process that you want to test
        const newTriangle = new Triangle()
        newTriangle.setColor(testColor)

        // conclusion
        expect(newTriangle.color).toBe(testColor)
    })

    it("should render the correct shape code", function() {
        //test value initialization
        const testColor = "red";

        // process that you want to test
        const newTriangle = new Triangle(testColor)
        const triangleCode = newTriangle.render();

        // conclusion
        expect(triangleCode).toBe(`<polygon points="100,0 0,200 200,200" fill="${testColor}" />`)
})

})

describe("Test for Circle class", function() {
    it("should create a Circle object with correct color", function() {
        // test value initialization
        const testColor = "orange";

        //process that you want to test
        const newCircle = new Circle()
        newCircle.setColor(testColor)

        // conclusion
        expect(newCircle.color).toBe(testColor)
    })

    it("should render the correct shape code", function() {
        //test value initialization
        const testColor = "orange";

        // process that you want to test
        const newCircle = new Circle(testColor)
        const circleCode = newCircle.render();

        // conclusion
        expect(circleCode).toBe(`<circle cx="100" cy="100" r="80" fill="${testColor}" />`)
})

})