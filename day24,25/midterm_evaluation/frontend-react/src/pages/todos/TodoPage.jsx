import { useNavigate } from "react-router-dom";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import Header from "../../components/ui/Header";
import TodoActions from "../../components/ui/TodoActions";
import TodoStats from "../../components/ui/TodoStats";
// import { useTodo } from "../../context/TodoContext";
// import { useAuth } from "../../context/AuthContext";

import {useAuth, useTodo} from "../../context"

function TodoPage() {
  const navigate = useNavigate();

  const {
    todos,
    currentFilter,
    showTodoForm,
    showConfirmDialog,

    handleToggleComplete,
    handleAddTodo,
    handleCancelDelete,
    handleConfirmDelete,
    handleDeleteTodo,
    handleFilterChange,
    openTodoForm,
    closeTodoForm,
  } = useTodo();

  const { logout, currentUser } = useAuth();

  // 로그아웃
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // 로그인 안 되어 있으면 로그인 페이지로 이동
  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div className="bg-light ">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <TodoStats todos={todos} />
          <TodoActions
            onAddClick={openTodoForm}
            currentFilter={currentFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
        <TodoList
          todos={todos}
          currentFilter={currentFilter}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
        <TodoForm
          show={showTodoForm}
          onClose={closeTodoForm}
          onAddTodo={handleAddTodo}
        />
        <ConfirmDialog
          show={showConfirmDialog}
          title="할 일 삭제"
          message="정말로 이 할 일을 삭제하시겠습니까?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </div>
    </div>
  );
}

export default TodoPage;
