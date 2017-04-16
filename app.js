var fs = require('fs'),
    inquirer = require('inquirer'),
    basiccard = require('./basiccard.js'),
    clozecard = require('./clozecard.js');

inquirer.prompt([
    {
        type: 'list',
        name: 'start',
        message: 'Which type of card would you like to create?',
        choices: [
            'Basic Flash Card(s) - (Front and Back)',
            'Cloze Flash Card(s) - (Fill in the blank)'
        ]
    }
]).then(function (selection) {
    if (selection.start === 'Basic Flash Card(s) - (Front and Back)') {
        console.log('Basic Chosen');
    } else if (selection.start === 'Cloze Flash Card(s) - (Fill in the blank)') {
        console.log('Cloze Chosen');
    } else {
        console.log("Uhoh! Something went wrong. Try again.");
    }
});