import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component Integration', () => {
  test('adds a new task when form is submitted', () => {
    render(<App />);
    
    // Get input and form
    const inputElement = screen.getByTestId('task-input');
    const formElement = screen.getByTestId('task-form');
    
    // Add a new task
    fireEvent.change(inputElement, { target: { value: 'New Test Task' } });
    fireEvent.submit(formElement);
    
    // Check if task is added
    const taskElement = screen.getByText('New Test Task');
    expect(taskElement).toBeInTheDocument();
  });
  
  test('displays correct task count after adding tasks', () => {
    render(<App />);
    
    // Get input and form
    const inputElement = screen.getByTestId('task-input');
    const formElement = screen.getByTestId('task-form');
    
    // Add two tasks
    fireEvent.change(inputElement, { target: { value: 'Task 1' } });
    fireEvent.submit(formElement);
    
    fireEvent.change(inputElement, { target: { value: 'Task 2' } });
    fireEvent.submit(formElement);
    
    // Check if task count is correct
    const tasksCount = screen.getByTestId('tasks-count');
    expect(tasksCount).toHaveTextContent('2 задач осталось');
  });
  
  test('deletes a task when delete button is clicked', () => {
    render(<App />);
    
    // Add a task
    const inputElement = screen.getByTestId('task-input');
    const formElement = screen.getByTestId('task-form');
    
    fireEvent.change(inputElement, { target: { value: 'Task to Delete' } });
    fireEvent.submit(formElement);
    
    // Check if task is added
    const taskElement = screen.getByText('Task to Delete');
    expect(taskElement).toBeInTheDocument();
    
    // Delete the task
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    
    // Check if task is removed
    expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
  });
  
  test('clears all tasks when clear button is clicked', () => {
    render(<App />);
    
    // Add two tasks
    const inputElement = screen.getByTestId('task-input');
    const formElement = screen.getByTestId('task-form');
    
    fireEvent.change(inputElement, { target: { value: 'Task 1' } });
    fireEvent.submit(formElement);
    
    fireEvent.change(inputElement, { target: { value: 'Task 2' } });
    fireEvent.submit(formElement);
    
    // Check if tasks are added
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    
    // Clear all tasks
    const clearButton = screen.getByTestId('clear-button');
    fireEvent.click(clearButton);
    
    // Check if tasks are removed
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    
    // Check empty message
    const emptyMessage = screen.getByTestId('empty-message');
    expect(emptyMessage).toBeInTheDocument();
  });
}); 