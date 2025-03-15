import React, { memo, useMemo } from 'react';

interface Employee {
  id: number;
  name: string;
  surname: string;
  salary: number;
  position: string;
}

interface TeamProps {
  employees: Employee[];
}

// Using memo to prevent unnecessary re-renders
const Team = memo(({ employees }: TeamProps) => {
  console.log('Rendering Team component');
  
  // Memoize expensive calculations
  const totalSalary = useMemo(() => {
    console.log('Calculating total salary...');
    return employees.reduce((sum, employee) => sum + employee.salary, 0);
  }, [employees]);
  
  const averageSalary = useMemo(() => {
    console.log('Calculating average salary...');
    return totalSalary / employees.length;
  }, [totalSalary, employees.length]);
  
  return (
    <div className="team-section">
      <h2>Team Information</h2>
      <div className="team-stats">
        <p>Total team members: {employees.length}</p>
        <p>Total salary: ${totalSalary}</p>
        <p>Average salary: ${averageSalary.toFixed(2)}</p>
      </div>
      
      <h3>Team Members</h3>
      <div className="team-list">
        {employees.map(employee => (
          <div key={employee.id} className="employee-item">
            <p><strong>{employee.name} {employee.surname}</strong></p>
            <p>Position: {employee.position}</p>
            <p>Salary: ${employee.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Team; 