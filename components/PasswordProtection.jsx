import React, { useState } from 'react';

const PASSWORD = '24863b'; // Set your password here

const PasswordProtection = ({ onPasswordCorrect }) => {
  const [inputPassword, setInputPassword] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === PASSWORD) {
      onPasswordCorrect();
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <form onSubmit={handlePasswordSubmit} style={{textAlign: 'center', marginTop: '2em'}}>
      <input
        type="password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasswordProtection;
