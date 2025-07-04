import React, { useMemo } from "react";
import TodoCard from "./TodoCard";
import EmptyState from "../ui/EmptyState";

function TodoList({
  todos,
  currentFilter,
  onToggleComplete,
  onDeleteTodo,
  isLoading = false,
}) {
  // 완료, 미완료 필터링
  // todos, currentFilter 바뀌기 전까지 실행 X
  const filteredTodos = useMemo(
    () => {
      switch (currentFilter) {
        case "completed":
          return todos.filter((todo) => todo.isCompleted);
        case "incompleted":
          return todos.filter((todo) => !todo.isCompleted);
        default:
          return todos;
      }
    },
    [todos, currentFilter] // 재연산 조건
  );

  // useMemo 사용하면 필요 없음
  // const filteredTodos = getFilteredTodos(); // 필터링된 배열 저장

  // 필터링됐을 때 아무 것도 없는 경우
  if (filteredTodos.length === 0) {
    return (
      <EmptyState
        message="표시할 일이 없습니다."
        currentFilter={currentFilter}
      />
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="col">
          <TodoCard
            onToggleComplete={onToggleComplete}
            onDeleteTodo={onDeleteTodo}
            todo={todo}
            isLoading={isLoading}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
