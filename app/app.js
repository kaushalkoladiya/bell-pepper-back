const bodyParser = require("body-parser");
const express = require("express");
const glob = require("glob");
const path = require("path");
const cors = require("cors");
const chalk = require("chalk");

const app = express();

// set headers
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// allow folders access
app.use(express.static(path.join(__dirname, "public", "build")));
app.use("/storage", express.static(path.join(__dirname, "storage")));

// body parsing
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing
console.log("Loading V2 API routes...");
glob.sync("./**/*.v2.routes.js").forEach((routePath) => {
  const name = routePath.split("/")[2];
  const routes = require(path.resolve(routePath));
  console.log(chalk.grey(" - %s"), routePath.replace("./app/", ""));
  app.use(`/api/v2/${name}`, routes);
});

console.log("Loading V1 API routes...");
glob.sync("./**/*.routes.js").forEach((routePath) => {
  const names = routePath.split("/");
  const fileName = names[names.length - 1];

  if (fileName.split(".").indexOf("v2") === -1) {
    const name = names[2];
    const routes = require(path.resolve(routePath));
    console.log(chalk.grey(" - %s"), routePath.replace("./app/", ""));
    app.use(`/api/${name}`, routes);
  }
});

app.use("/api/*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "404 not found!",
  });
});

module.exports = app;
