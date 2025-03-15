import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskFooter from '../TaskFooter';

describe('TaskFooter Component', () => {
  test('displays empty message when there are no tasks', () => {
    render(<TaskFooter tasksCount={0} onClearAll={() => {}} />);
    
    const emptyMessage = screen.getByTestId('empty-message');
    
    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('Все задачи выполнены');
    
    const clearButton = screen.queryByTestId('clear-button');
    expect(clearButton).not.toBeInTheDocument();
  });
  
  test('displays task count and clear button when there are tasks', () => {
    render(<TaskFooter tasksCount={3} onClearAll={() => {}} />);
    
    const tasksCount = screen.getByTestId('tasks-count');
    const clearButton = screen.getByTestId('clear-button');
    
    expect(tasksCount).toBeInTheDocument();
    expect(tasksCount).toHaveTextContent('3 задач осталось');
    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toHaveTextContent('Очистить все');
  });
  
  test('displays singular form when there is 1 task', () => {
    render(<TaskFooter tasksCount={1} onClearAll={() => {}} />);
    
    const tasksCount = screen.getByTestId('tasks-count');
    
    expect(tasksCount).toHaveTextContent('1 задача осталось');
  });
  
  test('calls onClearAll when clear button is clicked', () => {
    const mockClearAll = jest.fn();
    render(<TaskFooter tasksCount={3} onClearAll={mockClearAll} />);
    
    const clearButton = screen.getByTestId('clear-button');
    fireEvent.click(clearButton);
    
    expect(mockClearAll).toHaveBeenCalled();
  });
}); 