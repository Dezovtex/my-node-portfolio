const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Thank you! Message received.");
});

// start server (IMPORTANT FIX)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
