import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleBlankPageClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleSignupClick}>Students</button>
      <button onClick={handleBlankPageClick}>physically challenged students</button>
    </div>
  );
};

export default Welcome;