// 필요한 파일들을 가지고 오는 부분
// App.js에 3개의 컴포넌트를 만들고 할아버지, 엄마, 자식 컴포넌트를 만들어보고 서로 연결
// 할아버지 -> 엄마 -> 자식
// 자식 컴포넌트에만 div 태그

/**
 * Props는 컴포넌트 간의 정보 교류 방법
 * props에서 기억해야될 2가지
 * 1. 단방향 흐름
 *    props는 반드시 위에서 아래로 전달
 * 2. 읽기 전용
 *    props는 반드시 읽기 전용이며, 직접적으로 변경하지 않음
 */

import { Component, useState } from "react";
import "./App.css";
import HandlerEx from "./components/ex/HandlerEx";

// import Props from "./Props";

/**
 * Props는 객체 형태의 데이터
 * 구조분해 할당 활용
 *
 * Props Drilling
 * 부모 -> 자식 -> 그 자식 -> 그 자식의 자식 -> 그 놈의 자식
 *
 * Props Drilling의 문제점
 * 중간 컴포넌트들이 사용하지 않는 props를 계속 전달해야 를
 * 코드가 복잡해지고 유지보수가 어려워짐
 * 컴포넌트 간 의존성이 높아짐
 * 이러한 문제를 해결하기 위해 Redux, Context API와 같은 상태관리 도구 사용
 *
 * State
 * State란 컴포넌트 내부에서 바뀔 수 있는 값을 의미
 * UI element 변경을 위해 사용
 *
 * 불변성
 * 불변성이란 메모리에 있는 값을 직접 변경하지 않는 것을 말한다.
 * 새로운 값을 만들어서 기존 값을 대체하는 방식
 * 불변성이 있는 데이터
 * 숫자 / 문자열 / 불리언 / null / undefined
 *
 * 불변성 없는 데이터
 * 객체 / 배열 / 함수
 *
 * State는 변화를 메모리의 주소로 판단
 * 주소가 같다면, 새로 렌더링 안 함
 * 주소가 다르면, 새로 렌더링
 *
 * const [items, setItems] = useState([1, 2, 3]);
 * setItems([...items, items.length + 1]);
 *
 * 컴포넌트란
 * React의 핵심 빌딩 블록으로, UI 요소를 표현하는 최소한의 단위
 * 화면에 특정 부분이 어떻게 생겻는지 정하는 선언체라고 할 수 있음
 * JSX로 UI 구조를 선언하면, React가 실제 화면에 맞게 그리는 방식
 *
 * 컴포넌트 사용 이유
 * 1. 재사용성
 *    한 번 만들어 놓은 컴포넌트는  여러 곳에서 재사용 가능
 * 2. 조합이 가능
 *    여러 컴포넌트를 조합하여 복잡한 UI를 구성할 수 있음
 * 3. 독립적
 *    각 컴포넌트는 독립적으로 동작하고 관리할 수 있음
 *
 * 명령형 vs 선언형 프로그래밍
 * - 명령형 프로그래밍
 *   어떻게를 중심으로 프로그래밍
 *   DOM을 직접 조작하여 단계별로 명령 실행
 *
 * 1. 요소를 찾기
 * const container = document.getElementById("root");
 * 2. 요소 생성
 * const heading = document.createElement("h1");
 * 3. 텍스트 설정
 * heading.textContent = "텍스트";
 * 4. 스타일 설정
 * heading.style.color = "red";
 * heading.style.fontSize = "3rem";
 * 5. DOM에 추가
 * container.appendChild();
 *
 * - 선언형 프로그래밍
 *   무엇을 중심으로 프로그래밍
 *   원하는 UI 상태를 선언하면 React가 알아서 만듦
 * const App = () => {
 *  return (
 *  <div>
 *    <h1 style={{
 *      color : "blue",
 *      fontSize: "2rem"}
 *    }>
 *    텍스트
 *    </h1>
 *  </div>
 *   )
 * }
 *
 *ReactDOM.render(<App />, document.getElementById("root"));
 * - 리액트가 DOM 조작을 알아서 하기 때문에 개발자의 실수로 인한 버그가 없어짐
 * - 복잡한 DOM 조작을 빠르게 할 수 있음
 * - JSX 로 데이터랑 화면 구조를 한 파일에서 관리하여 유지보수 향상
 *
 * Rendering
 * 렌더링
 * 렌더링은 컴포넌트가 현재 props와 state를 기반으로 UI를 어떻게 구성할지 결정하는 과정
 *
 * 1. 앱이 처음 실행될 때
 * 2. state가 변경될 때
 * 3. props가 변경될 때
 * 4. 부모 컴포넌트에 렌더링
 * React 렌더링 vs 브라우저 렌더링
 *
 * - React 렌더링
 *  1. 컴포넌트 함수 호출
 *    props와 state를 기반으로 JSX 생성
 *  2. Virtual DOM 비교
 *    이전 결과와 새 결과 차이점 찾기
 * 3. DOM 업데이트
 *    변경된 부분만 실제 DOM에 반영
 *
 * - 브라우저 렌더링
 *  1. 스타일 계산
 *    CSS를 파싱하여 스타일 규칙 계산
 *  2. 레이아웃 계산
 *    요소의 위치와 크기 결정
 *  3. 페인팅
 *    실제 화면에 픽셀로 그리기
 *
 *  가상 돔이 동작하는 방식
 *  [STEP 1]
 *  1. 화면이 갱신되기 전 구조가 담겨있는 가상 DOM 객체
 *  2. 화면 갱신 후 보여야할 가상 DOM 객체
 *
 *  [STEP 2 : diffing]
 *  어느 부분(element)에서 변화가 일어났는지를 빠르게 파악
 *
 *  [STEP 3 : 재조정(reconciliation)]
 *  변경이 일어난 그 부분만 실제 DOM에 적용
 *  변경사항을 모두 모아 한 번만 적용 (Batch Update)
 *
 *  Virtual DOM은 실제 DOM의 메모리 내 복사본
 *  Diffing으로 변경점을 효율적으로 감지
 *  Batch Update로 모든 변경을 한 번에 처리
 *  Reconciliation으로 최소한의 DOM 조작
 *
 */

const App = () => {
  // 자바스크립트를 사용할 수 있는 부분
  // const handleClick = () => {
  //   alert("클릭!");
  // };

  // const name = "버디";
  // const animal = "고양이";

  // const a = 4;
  // const b = 3;

  // const title = "Hello World";
  // const author = "김작가";
  // const price = 10000;
  // const type = "자기개발서";

  // 값, set함수, useState(기본값)
  const [name, setName] = useState("홍길동");
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [todos, setTodos] = useState(["할일1", "할일2", "할일3", "할일4"]);
  const [value, setValue] = useState("");

  const [items, setItems] = useState([1, 2, 3]);

  const handlerCountUp = () => {
    setCount(count + 1);
  };

  const handlerChangeName = () => {
    setName(name === "홍길동" ? "새싹" : "홍길동");
  };

  // input값 받아오기
  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    console.log(inputValue);
  };

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* JSX를 사용하는 영역 */}

      {/* 제어 컴포넌트 */}
      <input type="text" onChange={onChangeHandler} value={value}></input>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>아이템 추가</button>

      {/* <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <h2>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</h2>
      <h2> {a > b && "a가 b보다 큽니다."}</h2>
      <span>내가 만든 App 컴포넌트 입니다.</span>
      <button onClick={handleClick}>클릭!</button>

      <div className="login">
        <h2> {title}</h2>
        <form>
          <div>
            <label>아이디</label>
            <input id="id"></input>
          </div>
          <div>
            <label>비밀번호</label>
            <input id="pwd"></input>
          </div>
        </form>
      </div>

      <br />
      <Props food={"찌개"} />

      <br />
      <br />
      <Best title={title} author={author} price={price} type={type} />

      <br />
      <br />

      <GrandFather /> */}

      <div>
        {name}
        {isVisible && <p>보이는 텍스트</p>}
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>

      <div>
        <button onClick={handlerChangeName}>이름 변경</button>
        <button onClick={handlerCountUp}>+1</button>
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          보임 안 보임
        </button>
        <button
          onClick={() => {
            const temp = [...todos, "추가"];
            setTodos(temp);
          }}
        >
          배열
        </button>
      </div>

      <span>{count}</span>

      <ClassState />

      <br />
      <br />
      <HandlerEx />
      <br />
      <br />

      <LayOut>
        <h1>홈페이지</h1>
        <p>메인 컨텐츠</p>
      </LayOut>

      <br />
      <br />

      <div>
        <h1>렌더링 예제</h1>
        <Counter />
      </div>
    </div>
  );
};

function LayOut({ children }) {
  return (
    <div className="container">
      <header>공통 헤더</header>
      <main>{children}</main>
      <footer>공통 푸터</footer>
    </div>
  );
}

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 2 });
  };

  render() {
    return (
      <div>
        <p>카운트: {this.state.count}</p>
        <button onClick={this.increaseCount}>+1</button>
      </div>
    );
  }
}

// const GrandFather = () => {
//   return (
//     <div>
//       <span>나는 할이버지입니다.</span>
//       <Mother />
//     </div>
//   );
// };

// const Mother = () => {
//   const name = "새싹";
//   return (
//     <div>
//       <span>나는 엄마입니다.</span>
//       <Child motherName={name} />
//     </div>
//   );
// };

// const Child = ({ motherName = "guest" }) => {
//   console.log({ motherName });
//   return <div> 나는 {motherName}입니다.</div>;
// };

// const Best = ({ title, author, price, type }) => {
//   return (
//     <div className="best">
//       <h2 id="title">이번주 베스트 셀러</h2>
//       <h4>{title}</h4>
//       <p> 저자 : {author}</p>
//       <p> 판매가 : {price}</p>
//       <p> 구분 : {type}</p>
//     </div>
//   );
// };

function Counter() {
  console.log("Counter 컴포넌트 렌더링");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>카운트 : {count}</h2>
      <button onClick={increment}>증가</button>
    </div>
  );
}

export default App;
