import React, { memo } from 'react';

interface Employee {
  id: number;
  name: string;
  surname: string;
  salary: number;
  position: string;
}

interface BestEmployeesProps {
  year: number;
  getBestEmployee: (year: number) => Employee;
}

// Using memo to prevent unnecessary re-renders
const BestEmployees = memo(({ year, getBestEmployee }: BestEmployeesProps) => {
  console.log('Rendering BestEmployees component');
  
  const bestEmployee = getBestEmployee(year);
  
  return (
    <div className="best-employee-section">
      <h2>Best Employee for {year}</h2>
      <div className="employee-card">
        <h3>{bestEmployee.name} {bestEmployee.surname}</h3>
        <p>Position: {bestEmployee.position}</p>
        <p>Salary: ${bestEmployee.salary}</p>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo
  // Only re-render if the year changes, since that's the only prop that affects the output
  return prevProps.year === nextProps.year;
});

export default BestEmployees; 