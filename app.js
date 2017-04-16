var fs = require("fs"),
    inquirer = require("inquirer"),
    basiccard = require("./basiccard.js"),
    clozecard = require("./clozecard.js");

inquirer.prompt([
    {
        type: "list",
        name: "start",
        message: "Which type of card would you like to create?",
        choices: [
            "Basic Flash Card(s) - (Front and Back)",
            "Cloze Flash Card(s) - (Fill in the blank)"
        ]
    }
]).then(function (selection) {
    if (selection.start === "Basic Flash Card(s) - (Front and Back)") {
        console.log("Great! Let's make a basic card...");
        inquirer.prompt([
            {
                type: "input",
                name: "basicFront",
                message: "Ok, what's the question?"
            },
            {
                type: "input",
                name: "basicBack",
                message: "Great, now what's the answer?"
            }
            ]).then(function(data){
                var basicCard = new basiccard(data.basicFront, data.basicBack);
                console.log("Here's your card -> " + basicCard.front + " | " + basicCard.back);
                fs.appendFile("basicdata.txt", '\r\n' + JSON.stringify(basicCard), function(err) {
                    if (err) throw err;
                    console.log("You're card has been saved!");
                });
        });
    } else if (selection.start === "Cloze Flash Card(s) - (Fill in the blank)") {
        console.log("Great! Let's make a cloze-deletion card...");
            inquirer.prompt([
                {
                    type: "input",
                    name: "clozeStatement",
                    message: "Ok, what's the full statement?"
                },
                {
                    type: "input",
                    name: "clozeHole",
                    message: "Great, now which part needs to be removed for the user to guess?"
                }
            ]).then(function(data){
                var clozeCard = new clozecard(data.clozeHole, data.clozeStatement);
                console.log("Here's your card -> " + clozeCard.front + " | " + clozeCard.hole);
                fs.appendFile("clozedata.txt", '\r\n' + JSON.stringify(clozeCard), function(err) {
                    if (err) throw err;
                    console.log("You're card has been saved!");
                });
            });
    } else {
        console.log("Uhoh! Something went wrong. Try again.");
    }
});