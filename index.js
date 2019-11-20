// Start JS
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
var pdf = require('html-pdf');
const generate = require('./generateHTML');
const axios = require("axios");

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


promptUser()
  .then(function (answers) {
    // const html = generate(answers);
    console.log(answers);

    // Make API call 
    // Return data, then write file

    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function (response) {
      console.log(response);
      const html = generate(answers, response);
      return writeFileAsync("index.html", html);

    });


  })
  .then(function () {
    console.log("Successfully wrote to index.html");
    // var pdf = require('html-pdf');
    var htmlPDF = fs.readFileSync('./index.html', 'utf8');
    var options = { format: 'Letter' };

    pdf.create(htmlPDF, options).toFile('./index.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });

  })
  .catch(function (err) {
    console.log(err);

  });

