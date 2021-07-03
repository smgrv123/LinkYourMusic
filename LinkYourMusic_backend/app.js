const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require("mongoose");
const getData = require("./Routes/get");
const postData = require("./Routes/posts");
const bodyParser = require("body-parser");
const deleteData = require("./Routes/delete");
const patchName = require("./Routes/patchSongName");
const patchURL = require("./Routes/patchSongURL");

app.listen(process.env.PORT||3000);
app.use(bodyParser.json());
app.use("/get", getData);
app.use("/posts", postData);
app.use("/delete", deleteData);
app.use("/updateName", patchName);
app.use("/updateURL", patchURL);

mongoose.connect(
  process.env.DB_CONNECTOR,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);
