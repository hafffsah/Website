const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 8080;

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`Started server at port ${PORT}`));
