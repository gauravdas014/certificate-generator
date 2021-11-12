const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/user.routes");

const app = express();

app.use(cors());
app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("tiny"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Welcome to the Ratofy API");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/certificate", userRouter);

module.exports = app;
