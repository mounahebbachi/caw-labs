import React, { useState } from 'react';

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, { username, password }]);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthForm;