const express = require("express");
const app = express();
const port = 3000;

// app.js는 서버 진입 점

// ejs 템플릿 설정
app.set("view engine", "ejs");

// 보여지는 화면 위치 지정, 템플릿 파일은 걍 이게 맞음
app.set("views", "./views");

// 미들웨어로 정적 파일 등록
// views는 ejs 파일 보관하는 곳
app.use("/views", express.static(__dirname + "/views"));

// public은 css, js와 같은 정적 파일 보관하는 곳, (템플릿 파일은 보통 정적 파일로 제공하지 않음)
// app.use("/public", express.static(__dirname + "/public"));

// 요거 추가해야 post 요청 body 가져올 수 있음
app.use(express.urlencoded({ extended: true }));

// __dirname 은 현재 작업중인 directory
console.log(__dirname);

// get 요청
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 해당 url로 요청이 왔을 때 싪행
app.get("/test", (req, res) => {
  res.render("index", { title: "폼 실습을 해봅시다" });
});

// 폼 get 요청 시 처리
app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

// 폼 post 요청 시 처리
app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
