const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // alows the request to continue to next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Epress!</h1>");
});

const server = http.createServer(app);

server.listen(3000);
