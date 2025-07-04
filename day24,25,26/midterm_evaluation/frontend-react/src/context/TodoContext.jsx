// import React, { createContext, useContext, useEffect, useState } from "react";
// import { todoAPI } from "../utils/data";

// const TodoContext = createContext();

// export const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]); // 할 일 목록
//   const [currentFilter, setCurrentFilter] = useState("all"); // 현재 필터 상태 (all, completed 등)

//   const [showTodoForm, setShowTodoForm] = useState(false); // 할 일 추가 폼 표시 여부
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false); // 삭제 확인 다이얼로그 표시 여부
//   const [todoToDelete, setTodoToDelete] = useState(null); // 삭제할 할 일 id

//   const [loading, setLoading] = useState(true); // 로딩 상태
//   const [error, setError] = useState(null); // 에러 상태

//   /**
//    * 훅 (Hook)
//    * 훅(Hook)은 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle)기능을 사용할 수 있게 해주는 함수이다.
//    * 
//    * 커스텀 훅(Custom Hook)
//    * 커스텀 훅은 여러 컴포넌트에서 반복되는 로직
//    * (예: 데이터 fetch, 폼 관리 등)을 재사용하기 위해 직접 만드는 훅
//    * useFetch : use가 꼭 붙어야 함
//    * 
//    * 
//    * 
//    * 
//    * 컴포넌트가 처음 렌더링될 때 할 일 목록 불러오기, 최초에 한 번 실행
//    * 리액트 클래스 컴포넌트 -> 함수형 컴포넌트
//    * 훅(Hook)은 함수형 컴포넌트에서 상태(state)와 생명 주기(lifecycle) 기능을 사용할 수 있게 해주는 함수이다.
//    *
//    * 컴포넌트 생명주기
//    * - 컴포넌트가 생성되고, 업데이트되고, 사라질 때까지의 일련의 과정을 말한다.
//    * - 클래스 컴포넌트는 라이프사이클 메서드, 함수형 컴포넌트는 useEffect로 제어한다.
//    * - 적절한 시점에 필요한 작업(데이터 fetch, 정리 등)을 넣는 것이 중요하다.
//    *
//    * 1. 클래스 컴포넌트의 라이프사이클
//    *  (1) 마운트(Mount) -> 태어났을 때
//    *
//    * constructor -> render -> componentDidMount
//    *
//    *  (2) 업데이트(Update) -> 살아 있는 중
//    *
//    * shouldComponentUpdate -> render -> componentDidUpdate
//    *
//    *  (3) 언마운트(Unmount) -> 죽었을 때
//    * componentWillUnmount
//    *
//    * 2. 함수형 컴포넌트의 라이프사이클 (useEffect)
//    * 함수형 컴포넌트에서는 훅으로 라이프사이클을 제어할 수 있게 제공
//    * useEffect의 두 번째 인자(의존성 배열)에 따라 동작이 달라짐
//    *
//    *  useEffect(() => {
//    *   컴포넌트가 마운트될 때 실행
//    *   componentDidMount
//    *  }, []);
//    *
//    *  useEffect(() => {
//    *   componentDidUpdate
//    *   컴포넌트가 마운트될 때 실행
//    *  }, [todos]);
//    *
//    *  useEffect(() => {
//    *    componentWillUnmount
//    *    return () => {
//    *      clearInterval(id)
//    *    }
//    *  }, [todos]);
//    *
//    * 대표적인 내장 훅
//    * - useState -> 상태 관리
//    * - useEffect -> 부수 효과 변경 처리
//    * - useContext -> 중앙 관리, 컴포넌트의 props들 관리
//    * - useRef
//    * - useMemo -> 변수 최적화
//    * - useCallback -> useMemo와 기능 유사, 함수 최적화
//    * 등등..
//    *
//    * */
//   useEffect(() => {
//     loadTodos();
//   }, []);

//   // DB에서 데이터 가져옴
//   const loadTodos = async () => {
//     try {
//       setLoading(true);
//       const data = await todoAPI.fetchTodos();
//       setTodos(data);
//     } catch (e) {
//       setError(true);
//       throw Error();
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 삭제 확인 다이얼로그에서 "확인" 눌렀을 때 실행: 실제 삭제 ---
//   const handleConfirmDelete = async () => {
//     if (!todoToDelete) return;
//     try {
//       await todoAPI.deleteTodo(todoToDelete);
//       setTodos((prevTodos) =>
//         prevTodos.filter((todo) => todo.id !== todoToDelete)
//       );
//       setTodoToDelete(null);
//     } catch (e) {
//     } finally {
//       setShowConfirmDialog(false);
//     }
//   };

//   // 삭제 취소
//   const handleCancelDelete = () => {
//     setTodoToDelete(null);
//     setShowConfirmDialog(false);
//   };

//   // --- 특정 할 일을 삭제하기 위해 삭제 확인 다이얼로그를 띄움 ---
//   const handleDeleteTodo = (todoId) => {
//     setTodoToDelete(todoId);
//     setShowConfirmDialog(true);
//   };

//   // 할 일 추가
//   const handleAddTodo = async (newTodo) => {
//     try {
//       const addedTodo = await todoAPI.addTodo(newTodo);
//       setTodos((prevTodos) => [...prevTodos, addedTodo]);
//       return { success: true };
//     } catch (e) {
//       return { success: false, error: e.message };
//     }
//   };

//   const handleFilterChange = (filter) => {
//     setCurrentFilter(filter);
//   };

//   // --- 할 일 완료/미완료 상태 토글 ---
//   const handleToggleComplete = async (todoId) => {
//     try {
//       const todo = todos.find((t) => t.id === todoId);
//       if (!todo) return;

//       const result = await todoAPI.toggleTodo(todoId, !todo.isCompleted);

//       setTodos((prevTodos) =>
//         prevTodos.map((todo) =>
//           todo.id === todoId
//             ? { ...todo, isCompleted: result.isCompleted }
//             : todo
//         )
//       );
//     } catch (e) {}
//   };

//   // --- 할 일 추가 폼 열기 ---
//   const openTodoForm = () => setShowTodoForm(true);

//   // --- 할 일 추가 폼 닫기 ---
//   const closeTodoForm = () => setShowTodoForm(false);

//   const value = {
//     // state
//     todos,
//     currentFilter,
//     showTodoForm,
//     showConfirmDialog,
//     todoToDelete,
//     // 함수
//     handleToggleComplete,
//     handleDeleteTodo,
//     handleConfirmDelete,
//     handleCancelDelete,
//     handleAddTodo,
//     handleFilterChange,
//     openTodoForm,
//     closeTodoForm,
//   };

//   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
// };

// export const useTodo = () => {
//   const context = useContext(TodoContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
