const express = require("express");
const homeRoute = require("./routes/home");
let globalStorage = require("./storage/storage");
const methodOverride = require("method-override");
const url = require("url"); // built-in utility

const PORT = 3001;
const app = express();

app.use(methodOverride("_method"));

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", homeRoute);
app.use(express.static(__dirname + "/public"));

app.delete("/:id", function(req, res) {
  let id = parseInt(req.params.id);
  console.log(id);
  globalStorage = globalStorage.filter(toDo => {
    return toDo.id !== id;
  });
  console.log(globalStorage);
  res.render("index", { toDoes: globalStorage });
});

app.get("/edit/:id", (req, res, next) => {
  let toDo = globalStorage.filter((el) => {
    return el.id === Number(req.params.id);
  });
  let id = toDo[0].id;
  let title = toDo[0].title;
  const data = { id: id, title: title };
  res.render("edit", { toDo: data });
  next();
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message)
  }
  console.log("Server is running...");
});
