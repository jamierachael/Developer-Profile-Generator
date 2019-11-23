// Developer-Profile-Generator
// Homework-8 Jamie Morris
// Entry Point script
// Start JS
// Declare requiements with variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
var pdf = require('html-pdf');
const generate = require('./generateHTML');
const axios = require("axios");
const open = require('open');

// This will write the file, and modify it to a promise
const writeFileAsync = util.promisify(fs.writeFile);


// Prompts user for username and favorite color
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub Username?"
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    }

  ]);
}


// Turns user prompt into answers to pull data
let userAnswers = {};
promptUser()
  .then(function (answers) {
    // const html = generate(answers);
    userAnswers = answers;
    console.log(answers);

    // Makes API call 
    // Return data, then write file

    const queryUrl = `https://api.github.com/users/${answers.username}`;
    // Axious (API) call
    return axios.get(queryUrl)


  })
  .then(function (response) {
    console.log(response);
    const html = generate(userAnswers, response);
    // Writes data into an HTML doc
    return writeFileAsync("index.html", html);

  })
  .then(function () {
    console.log("Successfully wrote to index.html");
    // Reads the file before PDF conversion
    var htmlPDF = fs.readFileSync('./index.html', 'utf8');
    var options = { format: 'Letter' };
    // Pass in HTML file to function to create PDF 
    // Creates PDF 
    return new Promise((resolve, reject) => {
      pdf.create(htmlPDF, options).toFile('./index.pdf', function (err, res) {
        // console.log(res);
        // Error testing 
        if (err) return reject(err);
        return resolve(res);

      })
    })

  })
  // Opens the PDF 
  .then(function (res) {
    console.log("This works!", res);

    open('index.pdf');
    // console.log('The image viewer app quit');
  })
  // Error testing 
  .catch(function (err) {
    console.log(err);

  });

