const db = require("../config/db");

// 비동기 처리를 해야 데이터가 들어올 때까지 기다림
exports.getDbCustomers = async () => {
  // 구조분해 할당으로 가져옴
  try {
    const [data] = await db.query("SELECT * FROM Customers");
    console.log(data[0]); // { customer_id: 1, customer_name: '김철수', email: 'kim@example.com' }
    return data;
  } catch (e) {
    console.error("쿼리 오류 발생:", e);
    throw e;
  }
};

// 임시 데이터
exports.getDbComments = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요^~^",
    },
    {
      id: 2,
      userid: "happy",
      date: "2022-11-01",
      comment: "반가워유",
    },
    {
      id: 3,
      userid: "lucky",
      date: "2022-11-02",
      comment: "오 신기하군",
    },
    {
      id: 4,
      userid: "bestpart",
      date: "2022-11-02",
      comment: "첫 댓글입니당ㅎㅎ",
    },
  ];
};
