const { getDbComments, getDbCustomers } = require("../model/Comment");

// 비동기로 데이터 끌고 와야됨
exports.getMain = async (req, res) => {
  res.render("index.ejs", {
    data: await getDbCustomers(),
  });
};

exports.postMain = (req, res) => {
  res.send("post");
};

exports.getId = (req, res) => {
  const { id } = req.params;
  res.render("paramIndex.ejs", {
    id,
    data: getDbComments(),
  });
};
