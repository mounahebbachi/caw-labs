// src/components/Home.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lastName) {
      history.push('/menu');  // Redirige vers la page menu après soumission
    } else {
      alert('Please enter your name and last name');
    }
  };

  return (
    <div className="home">
      <h2>Enter your details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
