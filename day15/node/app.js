const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// router 모듈의 경로
const indexRouter = require("./routes/index");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 모듈 사용 url, 경로
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



