import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';
import TaskFooter from './components/TaskFooter';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="todo-app">
      <h1 className="app-title">Todo App</h1>
      <TaskInput onAddTask={addTask} />
      
      <ul className="task-list">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDeleteTask={deleteTask} 
          />
        ))}
      </ul>
      
      <TaskFooter 
        tasksCount={tasks.length} 
        onClearAll={clearAllTasks} 
      />
    </div>
  );
}

export default App; 