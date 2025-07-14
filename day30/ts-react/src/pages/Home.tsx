import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // axios로 데이터 fetch
    const fetchData = async () => {
      try {
        // res에 넣은 데이터를 바로 쓸 수 있음
        const res = await axios.get("http://localhost:4000/");
        console.log(res);
        // string으로 지정
        setData(res.data as string);
      } catch (e) {
        console.log(e);
        throw new Error();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Home</div>
      <p>{data}</p>
    </>
  );
};
export default Home;
