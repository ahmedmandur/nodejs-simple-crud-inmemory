var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var noteRouter = require("./routes/noteRoute");

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/", noteRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
