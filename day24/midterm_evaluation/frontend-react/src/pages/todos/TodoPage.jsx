import React, { useEffect, useState } from "react";
import Header from "../../components/ui/Header";
import { useNavigate } from "react-router-dom";
import { todos as initialTodos } from "../../utils/data"; // 이름 변경
import TodoList from "../../components/todo/TodoList";
import TodoFilter from "../../components/todo/TodoFilter";
import TodoForm from "../../components/todo/TodoForm";

function TodoPage({ currentUser, onLogout }) {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showTodoForm, setShowTodoForm] = useState(false);

  // 최초 실행 시 실행
  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  // 이전 배열 값에 추가
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>할 일 목록</h2>
        </div>
        <div className="d-flex gap-2">
          {
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setShowTodoForm(true)}
            >
              할 일 추가
            </button>
          }
          {
            <TodoFilter
              currentFilter={currentFilter}
              // onFilterChange={handleFilterChange}
            />
          }
        </div>

        <TodoList todos={todos} currentFilter={currentFilter} />
        <TodoForm
          show={showTodoForm}
          onAddTodo={handleAddTodo}
          onClose={() => setShowTodoForm(false)}
        />
      </div>
    </div>
  );
}

export default TodoPage;
