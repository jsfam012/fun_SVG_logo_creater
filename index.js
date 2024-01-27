// const { Circle, Square } = require('./lib/shapes');
const {  SVG, Triangle, Circle, Square } = require("./lib")

const inquirer = require('inquirer');
const fs = require('fs');

async function getUserShape() {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    // const {text, textColor, shape, shapeColor} = await inquirer.prompt([
    {
        name: 'text',
        message: 'Please enter the text for your SVG',
    },
    {   
        name: 'textColor',
        message: 'Please provide a color for your SVG'
    },
    {
        type: 'list',
        message: 'Please enter the shape of your SVG',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        name: 'shapeColor',
        message: 'please provide a shape color for your SVG'
    }
    ]);


    let userShape;

// Use my shape variable to determine which object to construct 
switch(shape) {
    case 'Circle':
        userShape = new Circle(shapeColor)
        break;
    case 'Square':
        userShape = new Square(shapeColor)
        break;
    default:
        userShape = new Triangle(shapeColor)
}

const shapeCode = userShape.render()

const newSVG = new SVG(text, textColor, shapeCode);

const svgCode = newSVG.render();


fs.writeFile("./example/logo.svg", svgCode, function(){
    console.log("SVG has been generated!")
})


}

// async function generateSVG(userShape) {
//     const svgCode = `<svg version="1.1" width="300" height="200">
//     ${userShape.render()}
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userShape.textColor}">${userShape.text}</text>
//     </svg>`

//     await fs.promise.writeFile('./logo.svg', svgCode);

//     console.log('SVG generated successfully!');
// }

getUserShape()

