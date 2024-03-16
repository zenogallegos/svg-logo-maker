const colorList = require('./colorList.js');

const buildLogo = [
    {
        type: "list",
        name: "shape",
        message: "Select either a circle, square, or triangle to represent your logo:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a valid CSS color for your shape:",
    },
    {
        type: "input",
        name: "textInput",
        message: "Enter up to three characters to represent the text inside of your logo:"
    },
    {
        type: "input",
        name: "textInput",
        message: "Enter a valid CSS color for your logo text:"
    },
];

module.exports = buildLogo;