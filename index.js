const express = require("express");
const app = express();

require("dotenv").config();
app.set("port", process.env.PORT || 3500);
console.log(process.env.PORT);

//app.set("public", "./public");
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.render("index");
});

app.listen(app.get("port"), () => {
  console.log(`서버 실행 : http://localhost:${app.get("port")}`);
});
