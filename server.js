const express = require("express");
const app = express();
const mongoose = require("mongoose");
var fileUpload = require("express-fileupload");

const routes = require("./routes");

mongoose.connect("mongodb://54.37.158.186:30001/test");

app.use(fileUpload());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/templates/index.html");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

const template = require("./template.js");
app.get("/template", template.get);

var upload = require("./upload.js");
app.post("/", upload.post);

routes(app);
