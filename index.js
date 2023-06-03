const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

const routes = require("./routes/index");

const URL = process.env.Mongo_atlas;
const PORT = JSON.parse(process.env.PORT);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("open", () => console.log("Mongodb Connected"));
mongoose.connection.on("error", (e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());

app.use(routes);

app.get("/", function (req, res) {
  res.send({ msg: "Our Api record" });
});

app.use(errorHandler);

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
