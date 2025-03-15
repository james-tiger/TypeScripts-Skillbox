import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { User } from '../models/types';
import { filterUsers } from '../data/mockData';

const UsersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const [nameFilter, setNameFilter] = useState(nameParam);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(filterUsers(nameParam));
  }, [nameParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ name: nameFilter });
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          data-testid="name-filter"
        />
        <button type="submit">Search</button>
      </form>

      <div className="users-list">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <Link to={`/users/${user.id}`}>View Profile</Link>
            </div>
          ))
        ) : (
          <p>No users found with the specified filters.</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage; 