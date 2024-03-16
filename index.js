const inquirer = require('inquirer');
const fs = require('fs');
const buildLogo = require('./utils/buildLogo.js');
const shapeChoice = require('./utils/shapeChoice.js');

function writeToFile(file, data) {
    fs.writeFile(file, data, error => {
        if (error) {
            return console.log(error);
        }
        console.log("Generating your logo...");
    });
}

function init() {
    inquirer.createPromptModule(buildLogo)
    .then(function(response) {
        writeToFile("logo.svg", shapeChoice(response));
    })
}

init();
