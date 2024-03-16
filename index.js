const inquirer = require('inquirer');
const fs = require('fs');
const buildLogo = require('./utils/buildLogo.js');
const shapeChoice = require('./utils/shapeChoice.js');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Generating your logo...");
    });
}

function init() {
    inquirer.prompt(buildLogo)
    .then(function(res) {
        writeToFile("logo.svg", shapeChoice(res));
    });
}

init();