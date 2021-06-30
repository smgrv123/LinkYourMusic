const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require("mongoose");
const getPost = require("./Routes/get");

app.listen(3000);
app.get("/get", getPost);

mongoose.connect(
  process.env.DB_CONNECTOR,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);
