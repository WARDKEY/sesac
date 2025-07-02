import React, { useMemo } from "react";

function TodoStatus({ todos }) {
  const stats = useMemo(() => {
    // 완료된 일 개수
    const completedCount = todos.filter((todo) => todo.isCompleted).length;
    // 총 일 개수
    const totalCount = todos.length;
    // 퍼센트 계산
    const progressPercentage =
      totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    return { completedCount, totalCount, progressPercentage };
  }, [todos]);

  return (
    <div>
      <h2>할 일 목록</h2>
      <div
        className="d-flex align-items-center gap-3"
        style={{ height: "25px" }}
      >
        <p className="text-muted mb-0">
          총 {stats.totalCount}개 중 {stats.completedCount}개 완료
        </p>
        {stats.totalCount > 0 && (
          <div
            className="progress flex-grow-1"
            style={{ maxWidth: "300px", height: "100%" }}
          >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${stats.progressPercentage}%` }}
              aria-valuenow={stats.progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {stats.progressPercentage}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoStatus;
