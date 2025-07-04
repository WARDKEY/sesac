// 모듈이란
// state의 그룹

// 초기 값
const initialState = {
  number: 0,
};

// 위에랑 같다
// const [number, setNumber] = useState(0)

/**
 * 1) 컴포넌트로부터 dispatch를 통해 액션 객체를 전달 받음
 * 2) action 안에 있는 type을 스위치문을 통해 하나씩 검사해서, 일치하는 case 찾음
 * 3) type과 case가 일치하는 경우에, 해당 코드가 실행되고 새로운 state를 반환
 * 4) 리듀서가 새로운 state를 반환하면, 그게 새로운 모듈의 state로 바뀜
 *
 */

// 리듀서 => 변화를 일으키는 함수, setState() 역할
const counter = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "PLUS_ONE":
      return {
        number: state.number + 1,
      };

    case "MINUS_ONE":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
