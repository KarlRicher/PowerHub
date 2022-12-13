const express = require("express");
const app = express();
const port = 8000;
const helmet = require("helmet");
const morgan = require("morgan");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(helmet());

app.use(morgan("tiny"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
