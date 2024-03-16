const inquirer = require('inquirer');
const fs = require('fs');
const buildLogo = require('./utils/buildLogo.js');
const shapeChoice = require('./utils/shapeChoice.js');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }
        console.log("Generating your logo...");
    });
}

function init() {
    inquirer.prompt(buildLogo)
    .then(function(response) {
        writeToFile("logo.svg", shapeChoice(response));
    })
}

init();
