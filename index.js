// Start JS
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
var pdf = require('html-pdf');
const generate = require('./generateHTML');
const axios = require("axios");
const open = require('open');


const writeFileAsync = util.promisify(fs.writeFile);

// Pass in HTML file to function to create PDF 

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

// url: 'https://api.github.com/users/jamierachael',

let userAnswers = {};
promptUser()
  .then(function (answers) {
    // const html = generate(answers);
    userAnswers = answers;
    console.log(answers);

    // Make API call 
    // Return data, then write file

    const queryUrl = `https://api.github.com/users/${answers.username}`;

    return axios.get(queryUrl)


  })
  .then(function (response) {
    console.log(response);
    const html = generate(userAnswers, response);
    return writeFileAsync("index.html", html);

  })
  .then(function () {
    console.log("Successfully wrote to index.html");
    // var pdf = require('html-pdf');
    var htmlPDF = fs.readFileSync('./index.html', 'utf8');
    var options = { format: 'Letter' };

    return new Promise((resolve, reject) => {
      pdf.create(htmlPDF, options).toFile('./index.pdf', function (err, res) {

        console.log(res);

        if (err) return reject(err);
        return resolve(res);

      })
    })

  })
  .then(function (res) {
    console.log("This works!", res);


    open('index.pdf');
    console.log('The image viewer app quit');
  })

  .catch(function (err) {
    console.log(err);

  });

// Google maps is just a link with city in query string