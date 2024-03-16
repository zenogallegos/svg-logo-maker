const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function specifyShape (response) {
    if (response.shape === "circle") {
        let createShape = new Circle(response.textInput, response.textColor, response.shapeColor);
        return createShape.render()
    }
    if (response.shape === "square") {
        let createShape = new Square(response.textInput, response.textColor, response.shapeColor);
        return createShape.render()
    }
    if (response.shape === "triangle") {
        let createShape = new Triangle(response.textInput, response.textColor, response.shapeColor);
        return createShape.render()
    }
}

module.exports = specifyShape;