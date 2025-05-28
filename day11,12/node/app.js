//app.js
const express = require("express");
const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const url = "https://api.themoviedb.org/3/movie/changes?page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer b18e798ff377ef49f1c335283e7c43d6",
    },
  };

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error(err));

	// 위의 promise 방식과 동일하지만 async가 더 좋다
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  
  // res.render("index", { data });
});

app.listen(PORT, () => {
  console.log(`Start server!!! http://localhost:${PORT}`);
});
