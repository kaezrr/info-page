import fs from "node:fs";
import express from "express";

const indexHTML = fs.readFileSync("./index.html", "utf8");
const aboutHTML = fs.readFileSync("./about.html", "utf8");
const errorHTML = fs.readFileSync("./404.html", "utf8");
const contactMeHTML = fs.readFileSync("./contact-me.html", "utf8");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (_request, response) => {
  response.send(indexHTML);
});
app.get("/about", (_request, response) => {
  response.send(aboutHTML);
});
app.get("/contact-me", (_request, response) => {
  response.send(contactMeHTML);
});
app.get("/*", (_request, response) => {
  response.send(errorHTML);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
