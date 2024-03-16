const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function specifyShape () {
    if (Response.shape === "circle") {
        let createShape = new Circle(response.textinput, response.textColor, response.shapeColor);
        return createShape.render()
    }
    if (Response.shape === "square") {
        let createShape = new Square(response.textinput, response.textColor, response.shapeColor);
        return createShape.render()
    }
    if (Response.shape === "triange") {
        let createShape = new Triangle(response.textinput, response.textColor, response.shapeColor);
        return createShape.render()
    }
}

module.exports = specifyShape;