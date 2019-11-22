const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data, response) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
            
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
          background-color: #E9EDEE;
          height: auto;
          padding-top: 30px;
         
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         color: ${colors[data.color].headerColor};
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         color: ${colors[data.color].headerColor};
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
          padding: 50px;
          padding-left: 100px;
          padding-right: 100px;
         
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .5; 
          } 
         }
      </style>
      
      </head >
   <body>
  
    
        <div class="container">
            <div class="wrapper">
                <div class="photo-header">
                <img src="${response.data.avatar_url}" class="rounded-circle mx-auto d-block" />
                    <h1 class="display-4">Hi!</h1>
                    <h1 class="display-4">Hi! My name is ${response.data.name}</h1>
                    <h3 class="text-center">Currently @ ${response.data.company}</h3>
                    </div>
                    <nav class="nav links-nav mt-5">


                            <a class="nav-link" href="${response.data.location}">I am from ${response.data.location}</a>
                        
                        
                            <a class="nav-link" href="${response.data.html_url}"><i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                            
                        
                            <a class="nav-link" href="${response.data.blog}">${response.data.blog}</a>
                            
                            </nav>
                        

                </div>
            </div>
            <h2 class="display-4 text-center mt-5">Testing</h2>
            
            <div class="row">
                <div class="col">
                    <div class="card photo-header">
                        <div class="card-body">
                            <h3>Public Repos </h3>
                            <h4>${response.data.public_repos} </h4>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card photo-header">
                        <div class="card-body">
                            <h3>Followers</h3>
                            <h4>${response.data.followers}</h4> 
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <div class="card photo-header">
                        <div class="card-body">
                            <h4> What?</h4>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card photo-header">
                        <div class="card-body">
                            <h3>Following</h3>
                            <h4> ${response.data.following}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

  </body>
 </html >`
}
module.exports = generateHTML;
// generateHTML();
// console.log(data);