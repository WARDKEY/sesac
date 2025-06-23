import { useState } from "react";

const HandlerState = () => {
  const [state, setState] = useState("Hello World!");
  const [color, setColor] = useState("black");
  const [isVisi, setIsVisi] = useState(true);

  const [see, setSee] = useState("사라져라");

  return (
    <div>
      <h2 style={{ color: color }}>{state}</h2>

      <h2>{isVisi && <p>안녕하세요</p>}</h2>
      <button
        onClick={() => {
          setState("Goodbye World!");
        }}
      >
        출력
      </button>

      <button
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>

      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>

      <button
        onClick={() => {
          setIsVisi(!isVisi);
        }}
      >
        {isVisi ? "사라져라": "보여라"}
      </button>
    </div>
  );
};

export default HandlerState;
