import React, { createContext, useContext, useEffect, useState } from "react";
import { initialTodos, todoAPI } from "../utils/data";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const [showTodoForm, setShowTodoForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 최초 실행 시 실행
  // todo 데이터 가져옴
  useEffect(() => {
    loadTodos();
  }, []);

  // 비동기 함수 처리 가상 DB 연결
  const loadTodos = async () => {
    try {
      setLoading(true); // 최초 로딩
      const data = await todoAPI.fetchTodos(); // todoList 불러옴
      setTodos(data);
    } catch (e) {
      setError(true); // 에러 발생
      throw new Error("할 일 리스트 로딩 실패");
    } finally {
      // 끝나면 로딩 종료
      setLoading(false);
    }
  };

  // 삭제 모달창 함수
  const handleConfirmDelete = () => {
    if (todoToDelete) {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== todoToDelete)
      );
      // 원래 상태로
      setTodoToDelete(null);
    }
    // 모달창 끄기
    setShowConfirmDialog(false);
  };

  // 삭제 모달창 취소 함수
  const handleCancelDelete = () => {
    setTodoToDelete(null);
    setShowConfirmDialog(false);
  };

  // 삭제, 값은 TodoCard에서 todo id 받음
  const handleDeleteTodo = (todoId) => {
    setTodoToDelete(todoId);
    setShowConfirmDialog(true);
  };

  // 이전 배열 값에 추가
  const handleAddTodo = async (newTodo) => {
    try {
      const addedTodo = await todoAPI.addTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, addedTodo]);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  };

  // 완료 미완료 전체 필터 상태 변경, 값은 TodoFilter에서 id 받음s
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  // 상태 변경
  const handleToggleComplete = async (todoId) => {
    try {
      // todo 찾고
      const todo = todos.find((t) => t.id === todoId);

      // 없으면 종료
      if (!todo) {
        return;
      }

      const result = await todoAPI.toggleTodo(todoId, !todo.isCompleted);

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoId
            ? { ...todo, isCompleted: result.isCompleted }
            : todo
        )
      );
    } catch (e) {
      setError(true);
      throw new Error("토글 실패");
    }
  };

  const openTodoForm = () => setShowTodoForm(true);
  const closeTodoForm = () => setShowTodoForm(false);

  const value = {
    // state
    todos,
    currentFilter,
    showTodoForm,
    showConfirmDialog,
    todoToDelete,

    // 함수
    handleToggleComplete,
    handleAddTodo,
    handleCancelDelete,
    handleConfirmDelete,
    handleDeleteTodo,
    handleFilterChange,
    openTodoForm,
    closeTodoForm,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within an TodoProvider");
  }
  return context;
};
