import React from "react";

function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "전체" },
    { id: "completed", label: "완료" },
    { id: "incompleted", label: "미완료" },
  ];

  return (
    <div className="btn-group" role="group" aria-label="Todo filter">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`btn btn-outline-primary ${
            currentFilter === filter.id ? "active" : ""
          }`}
          onClick={() => onFilterChange(filter.id)} // id값에 따라 상태 변경
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
