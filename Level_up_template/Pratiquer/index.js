// -------------------------------EXO DE VIBE REECRITURE DE CODE----------------------------

// npm install xmlhttprequest

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function reqListener () {
//   console.log(this.responseText);
// }

// var req = new XMLHttpRequest();
// req.responseType = 'json';
// req.open('GET', 'https://www.affirmations.dev/', true);
// req.onload  = reqListener;
// req.send(null);

// // ------------------------------------NEW ECRITURE------------------------------

// npm install node-fetch
// npm init -y

// const fetch = require('node-fetch');

// fetch('https://www.affirmations.dev')
//     .then(res => res.text())
//     .then(text => console.log(text));

// // ------------------------------------NEW ECRITURE AVEC ASYNC/AWAIT------------------------------

// npm install node-fetch
// const fetch = require ('node-fetch');
// async function essai(){
//   let url = await fetch('https://www.affirmations.dev');
//   url = await url.json();
//   console.log(url.affirmation);
// }
// essai();
// // ------------------------------------MINI-PROJET------------------------------
const fetch = require ('node-fetch');
let fetchUrl = async function (){
  let url = await fetch('https://www.affirmations.dev');
  try {
    url = await url.json();
    return url.affirmation;
  } catch (error) {
    return `Error caught: ${error.message}`;
  }
};
// fetchUrl();


var http = require('http');
http.createServer(async function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(await fetchUrl());
  res.end();
}).listen(8080);


//  test
// try {
  //  res.write(await fetchUrl());
  // } catch (error) {
  //   console.log(`Error caught: ${error.message}`) ;
  // }

// // ------------------------------------EXEMPLE 1------------------------------

// async function bonjour(){
//   await console.log('Bonjour');
// }
// bonjour();

// OU

// let hello = async function() {await setTimeout(()=> console.log("hello"),2000) };
// hello();

// // ------------------------------------EXEMPLE 2------------------------------


// async function test(){
//   const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('Ok !'), 2000)
//   });
  
//   let result = await promise; //Attend que la promesse soit résolue ou rejetée
//   console.log(result);
// }

// test();

// // ------------------------------------EXEMPLE 3------------------------------

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();