const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static(__dirname + "/public"));

// router 모듈의 경로
const aRouter = require("./routes/defaultRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 모듈 사용 url, 경로
app.use("/api/goods", aRouter);
// ==
// app.use("/a", require("./routes/defaultRoute"));

app.use("/users", require("./routes/userRoute"));

app.use("/posts", require("./routes/postRoute"));

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
