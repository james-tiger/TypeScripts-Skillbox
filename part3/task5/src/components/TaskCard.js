import React from 'react';

function TaskCard({ task, onDeleteTask }) {
  return (
    <li className="task-card" data-testid="task-card">
      <span className="task-text" data-testid="task-text">{task.text}</span>
      <button 
        className="delete-btn" 
        onClick={() => onDeleteTask(task.id)}
        aria-label="Удалить задачу"
        data-testid="delete-button"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default TaskCard; 