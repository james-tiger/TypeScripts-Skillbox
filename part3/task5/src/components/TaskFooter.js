import React from 'react';

function TaskFooter({ tasksCount, onClearAll }) {
  return (
    <div className="task-footer" data-testid="task-footer">
      {tasksCount > 0 ? (
        <>
          <span className="tasks-count" data-testid="tasks-count">
            {tasksCount} {tasksCount === 1 ? 'задача' : 'задач'} осталось
          </span>
          <button 
            className="clear-all-btn" 
            onClick={onClearAll}
            data-testid="clear-button"
          >
            Очистить все
          </button>
        </>
      ) : (
        <span className="empty-message" data-testid="empty-message">
          Все задачи выполнены
        </span>
      )}
    </div>
  );
}

export default TaskFooter; 