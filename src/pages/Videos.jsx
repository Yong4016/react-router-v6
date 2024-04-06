import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    navigate(`/videos/${input}`);
  };
  return (
    <>
      <div>Videos</div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='video id...' value={input} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Videos;
