const express = require("express");
const app = express();
const PORT = 4000;

const db = require("./models");
// models/index.js를 통해 연결된 Sequelize 인스턴스와 모델들을 가져옴
app.use(express.json());

async function testDbConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("데이터베이스 연결 성공!");
  } catch (e) {
    console.log("데이터베이스 연결 실패:", e);
  }
}

testDbConnection();

app.post("/users", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  console.log(firstName, lastName, email);

  const newUser = await db.User.create({
    firstName,
    lastName,
    email,
  });

  return res.send({
    msg: `새로운 유저를 넣음${newUser}`,
  });

  // // 기존에 DB에 이메일이 있는지 없는지 확인
  //   const existingUser = await prisma.users.findUnique({
  //     where : { email }
  //   })
  //   // 이메일이 있으면 중복 안내내
  //   if(existingUser){
  //     return res.send({
  //       message : "중복된 아이디가 있습니다."
  //     })
  //   }

  //   // 이메일 없으면 추가
  //   await prisma.users.create({
  //     data : {
  //       email,
  //       password,
  //       nickname
  //     }
  //   })
  //   return res.send({
  //     message : "회원가입 완료!"
  //   })
});

app.listen(PORT, () => {
  console.log(`start server http://localhost:${PORT}`);
});
