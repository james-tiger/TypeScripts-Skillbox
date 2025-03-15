import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskInput from '../TaskInput';

describe('TaskInput Component', () => {
  test('renders input field and button', () => {
    render(<TaskInput onAddTask={() => {}} />);
    
    const inputElement = screen.getByTestId('task-input');
    const buttonElement = screen.getByTestId('add-button');
    
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('updates input value when typing', () => {
    render(<TaskInput onAddTask={() => {}} />);
    
    const inputElement = screen.getByTestId('task-input');
    
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    
    expect(inputElement.value).toBe('New Task');
  });

  test('calls onAddTask when form is submitted', () => {
    const mockAddTask = jest.fn();
    render(<TaskInput onAddTask={mockAddTask} />);
    
    const inputElement = screen.getByTestId('task-input');
    const formElement = screen.getByTestId('task-form');
    
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.submit(formElement);
    
    expect(mockAddTask).toHaveBeenCalledWith('New Task');
  });

  test('clears input after form submission', () => {
    render(<TaskInput onAddTask={() => {}} />);
    
    const inputElement = screen.getByTestId('task-input');
    const formElement = screen.getByTestId('task-form');
    
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.submit(formElement);
    
    expect(inputElement.value).toBe('');
  });

  test('does not call onAddTask when input is empty', () => {
    const mockAddTask = jest.fn();
    render(<TaskInput onAddTask={mockAddTask} />);
    
    const formElement = screen.getByTestId('task-form');
    
    fireEvent.submit(formElement);
    
    expect(mockAddTask).not.toHaveBeenCalled();
  });
}); 