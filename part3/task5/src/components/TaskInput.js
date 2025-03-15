import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputText);
    setInputText('');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit} data-testid="task-form">
      <input
        type="text"
        placeholder="Добавить новую задачу..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        data-testid="task-input"
      />
      <button type="submit" aria-label="Добавить задачу" data-testid="add-button">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}

export default TaskInput; 