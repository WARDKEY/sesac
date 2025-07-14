import React, { useEffect, useState } from "react";
import axios from "axios";

// 리턴에 대한 객체 모양 지정
interface UserResponse {
  message: string;
}

const About = () => {
  const [data, setData] = useState<UserResponse | null>(null);
  useEffect(() => {
    // 원래 useQuery에 있어야 됨
    const postUser = async () => {
      try {
        const response = await axios.post<UserResponse>(
          "http://localhost:4000/users",
          {
            name: "홍길동",
          }
        );
        console.log(response.data);

        setData(response.data);
      } catch (e) {
        console.log(e);
        throw new Error("에러 발생");
      }
    };
    // 컴포넌트 최초 실행 시 함수 실행
    postUser();
  }, []);

  // data 값이 변경될때마다 실행
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div>About</div>
      <p>{data?.message}</p>
    </>
  );
};

export default About;
