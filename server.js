const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      const cpuOptions = ['rock', 'paper', 'scissors'];
      let cpuChoiceNumber = Math.floor(Math.random() * 3);
      let cpuChoice = cpuOptions[cpuChoiceNumber];
      console.log(cpuChoiceNumber)
      console.log(cpuChoice)
      if (params['student'] == cpuChoice){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          serverChoice: `The computer's choice: ${cpuChoice}`,
          result: "IT'S A DRAW",
        }
        res.end(JSON.stringify(objToJson));  
      }
      else if(params['student']== 'rock'){
        if (cpuChoice == 'paper'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            serverChoice: `The computer's choice: ${cpuChoice}`,
            result: "The Computer Wins This Round!",
          }
          res.end(JSON.stringify(objToJson));
        }//cpuChoice = paper for the win
        else{
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            serverChoice: `The computer's choice: ${cpuChoice}`,
            result: "YOU HAVE BEATEN THE COMPUTER!",
          }
          res.end(JSON.stringify(objToJson));
        }//user wins with rock
      }//student = rock
      else if(params['student'] == 'paper'){
        if (cpuChoice == 'scissors') {
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            serverChoice: `The computer's choice: ${cpuChoice}`,
            result: "The Computer Wins This Round!",
          }
          res.end(JSON.stringify(objToJson));
        } //cpuChoice = scissors for the win
        else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            serverChoice: `The computer's choice: ${cpuChoice}`,
            result: "YOU HAVE BEATEN THE COMPUTER!",
          }
          res.end(JSON.stringify(objToJson));
        }//user wins with paper
      }//student = paper
      else if (params['student'] == 'scissors'){
        if (cpuChoice == 'rock'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            serverChoice: `The computer's choice: ${cpuChoice}`,
            result: "The Computer Wins This Round!",
          }
          res.end(JSON.stringify(objToJson));
        }//cpuChoice = rock for the win
        else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            serverChoice: `The computer's choice: ${cpuChoice}`,
            result: "YOU HAVE BEATEN THE COMPUTER!",
          }
          res.end(JSON.stringify(objToJson));
        }//user wins with scissors
      }//student = scissors
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          serverChoice: "HEY!",
          result: "Invalid Input! Please enter Rock, Paper, or Scissors",
        }
        res.end(JSON.stringify(objToJson));
      }
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/images/background1.jpeg'){
    fs.readFile('images/background1.jpeg', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
