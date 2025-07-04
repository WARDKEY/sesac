import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  /**
   * useSelector
   *
   * react-redux에서 제공하는 useSelector라는 훅
   *
   */

  // useSelector
  const number = useSelector((state) => state.counter.number);
  console.log(number);

  // 디스패치 생성
  const dispatch = useDispatch();

  return (
    <div className="App">
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        -1
      </button>
    </div>
  );
}

export default App;
