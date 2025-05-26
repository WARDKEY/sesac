const express = require("express");
const app = express();
const port = 3000;

// ejs 템플릿 설정
app.set("view engine", "ejs");

// 보여지는 화면 위치 지정
// app.set("views", "./views");

// 미들웨어로 등록
// 앞은 그대로 /views 뒤가 바뀌어야 됨
app.use("/views", express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));

// 요거 추가해야 post 요청 body 가져올 수 있음
app.use(express.urlencoded({ extended: true }));

// __dirname 은 현재 작업중인 directory
console.log(__dirname);

// get 요청
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

// 해당 url로 요청이 왔을 때 싪행
app.get("/test", (req, res) => {
  res.render("form", { title: "폼 실습을 해봅시다" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
