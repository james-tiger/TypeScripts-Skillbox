import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskCard from '../TaskCard';

describe('TaskCard Component', () => {
  const mockTask = {
    id: 1,
    text: 'Test Task'
  };
  
  test('renders task text correctly', () => {
    render(<TaskCard task={mockTask} onDeleteTask={() => {}} />);
    
    const taskTextElement = screen.getByTestId('task-text');
    
    expect(taskTextElement).toBeInTheDocument();
    expect(taskTextElement).toHaveTextContent('Test Task');
  });
  
  test('renders delete button', () => {
    render(<TaskCard task={mockTask} onDeleteTask={() => {}} />);
    
    const deleteButton = screen.getByTestId('delete-button');
    
    expect(deleteButton).toBeInTheDocument();
  });
  
  test('calls onDeleteTask with task id when delete button is clicked', () => {
    const mockDeleteTask = jest.fn();
    render(<TaskCard task={mockTask} onDeleteTask={mockDeleteTask} />);
    
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    
    expect(mockDeleteTask).toHaveBeenCalledWith(1);
  });
  
  test('task card has appropriate CSS class', () => {
    render(<TaskCard task={mockTask} onDeleteTask={() => {}} />);
    
    const taskCard = screen.getByTestId('task-card');
    
    expect(taskCard).toHaveClass('task-card');
  });
}); 