// Start JS
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const PDF = require("html-pdf");

const writeFileAsync = util.promisify(fs.writeFile);

// Pass in HTML file to function to create PDF 

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "color",
            message: "What is your favorite color?"
        }
        // {
        //     type: "input",
        //     name: "username",
        //     message: "What is your GitHub Username?"
        // }
    ]);
}

// promptUser();

function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is Jamie Rachael</h1>
      <p class="lead">I am from Haverhill, MA.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is jamierachael</li>
        <li class="list-group-item">LinkedIn: <a href="https://www.linkedin.com/in/jamie-rachael-morris/>Jamie Rachael Morris</a></li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
}

// Code example for HTML to PDF: 

// // var fs = require('fs');
// var pdf = require('html-pdf');

// var options = { format: 'Letter' };

// pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
//     if (err) return console.log(err);
//     console.log(res); // { filename: '/app/businesscard.pdf' }
// });


promptUser()
    .then(function (answers) {
        const html = generateHTML(answers);

        return writeFileAsync("index.html", html);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });