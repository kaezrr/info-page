import http from "node:http";
import fs from "node:fs";

let indexHTML, aboutHTML, contactMeHTML, errorHTML;

fs.readFile("./index.html", "utf8", (err, data) => {
  indexHTML = err || data;
});
fs.readFile("./about.html", "utf8", (err, data) => {
  aboutHTML = err || data;
});
fs.readFile("./contact-me.html", "utf8", (err, data) => {
  contactMeHTML = err || data;
});
fs.readFile("./404.html", "utf8", (err, data) => {
  errorHTML = err || data;
});

const server = http.createServer();

server.on("request", (request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  switch (request.url) {
    case "/":
      response.write(indexHTML);
      break;
    case "/about":
      response.write(aboutHTML);
      break;
    case "/contact-me":
      response.write(contactMeHTML);
      break;
    default:
      response.write(errorHTML);
  }
  response.end();
});

server.listen(8080);
console.log("server is listening...");
