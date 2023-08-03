import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggle}>
        {isOn ? 'Closed' : 'Opened'}
      </button>
      <h2>Mood: {isOn ? 'Opened' : 'Closed'}</h2>
    </div>
  );
};

export default Toggle;
