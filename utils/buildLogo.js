const colorList = require('./colorList.js');

const buildLogo = [
    {
        type: "list",
        name: "shape",
        message: "Select either a circle, square, or triangle to represent your logo:",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a valid CSS color for your shape:",
        validate: function (answer) {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorList.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorList[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    {
        type: "input",
        name: "textInput",
        message: "Enter up to three characters to represent the text inside of your logo:"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a valid CSS color for your logo text:",
        validate: function (answer) {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorList.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorList[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    }
];

module.exports = buildLogo;