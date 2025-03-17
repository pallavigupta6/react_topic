import React, { useState } from 'react';

const ControlledComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (!event.target.value) {
      setError('Username is required');
    } else {
      setError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input 
            type='text' 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <label>
          Password:
          <input 
            type='password' 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </label>
        <button 
          type='submit' 
          disabled={!username || !password || error} // Button is disabled if inputs are invalid
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ControlledComponent;
