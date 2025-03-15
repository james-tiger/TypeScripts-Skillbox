import React, { useState, useMemo, useCallback, ChangeEvent } from 'react';
import './App.css';
import BestEmployees from './components/BestEmployees';
import Team from './components/Team';

const profit = [5000, 15000, 10000, 20000, 25000, 15000, 25000, 30000];
const employees = [
  { id: 1, name: 'John', surname: 'Doe', salary: 5000, position: 'Developer' },
  { id: 2, name: 'Jane', surname: 'Smith', salary: 6000, position: 'Designer' },
  { id: 3, name: 'Bob', surname: 'Johnson', salary: 7000, position: 'Manager' },
  { id: 4, name: 'Alice', surname: 'Williams', salary: 4500, position: 'Developer' },
  { id: 5, name: 'Charlie', surname: 'Brown', salary: 8000, position: 'Team Lead' },
];

function App() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // This is an expensive calculation that should be memoized
  const totalProfit = useMemo(() => {
    console.log('Calculating total profit...');
    return profit.reduce((sum, current) => sum + current, 0) * month;
  }, [month]);

  // Memoize the function to find the best employee
  const getBestEmployee = useCallback((year: number) => {
    console.log('Finding best employee for year:', year);
    // Simulating that different employees are best in different years
    const index = year % employees.length;
    return employees[index];
  }, []);

  const handleMonthChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMonth(Number(e.target.value));
  }, []);

  const handleYearChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
  }, []);

  const handleDateChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  }, []);

  return (
    <div className="App">
      <h1>Company Dashboard</h1>
      
      <div className="counters">
        <div>
          <label>Month: </label>
          <input 
            type="number" 
            value={month} 
            onChange={handleMonthChange} 
            min="1" 
            max="12"
          />
        </div>
        
        <div>
          <label>Year: </label>
          <input 
            type="number" 
            value={year} 
            onChange={handleYearChange} 
            min="2020" 
            max="2030"
          />
        </div>
      </div>
      
      <div className="profit-section">
        <h2>Company Profit</h2>
        <p>Total profit for {month} months: ${totalProfit}</p>
      </div>
      
      <div className="date-section">
        <h2>Selected Date</h2>
        <input 
          type="date" 
          value={selectedDate.toISOString().split('T')[0]} 
          onChange={handleDateChange}
        />
        <p>Selected date: {selectedDate.toLocaleDateString()}</p>
      </div>
      
      <BestEmployees year={year} getBestEmployee={getBestEmployee} />
      
      <Team employees={employees} />
    </div>
  );
}

export default App; 