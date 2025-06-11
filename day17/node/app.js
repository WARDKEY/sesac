const express = require("express");
const userRouter = require("./routers/users.router");
// 쿠키 해석을 위해 등록
const cookieParser = require("cookie-parser");
// 세션 해석을 위해 등록
const session = require("express-session");
const fileStore = require("session-file-store")(session);
// 에러 미들웨어
const errorHandlingMiddleware = require("./middleware/error-handling-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

//세션 설정
app.use(
  session({
    secret: "sessac",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
    },
    store: new fileStore(),
  })
);

app.use("/", userRouter);

// 오류 처리 미들웨어
app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, `포트로 서버가 열림`);
});
