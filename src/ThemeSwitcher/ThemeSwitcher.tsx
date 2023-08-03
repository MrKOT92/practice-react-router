import React, { useState } from 'react';

export default function ThemeSwitcher(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Black mode: {isDarkMode ? 'Activated' : 'Dezactivated'}</h2>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Turn off dark mode' : 'Enable dark mode'}
      </button>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: isDarkMode ? 'black' : 'azure',
        }}
      >
       
      </div>
    </div>
  );
}
