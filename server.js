const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// set EJS
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Thank you! Message received.");
});

// start server
app.listen(3000, () => {
  console.log("Portfolio running at http://localhost:3000");
});
